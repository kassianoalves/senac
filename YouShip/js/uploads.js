// uploads.js - gerencia uploads locais do usuário usando IndexedDB
// API minimal: saveUpload(file, metadata) -> Promise(id)
//               listUploads() -> Promise(array of {id,name,size,ts,thumb})
//               getUploadBlob(id) -> Promise(Blob)

(function(window){
  const DB_NAME = 'youship_uploads_db';
  const STORE = 'uploads';
  function openDB(){
    return new Promise((res,rej)=>{
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = ()=>{
        const db = req.result;
        if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, {keyPath:'id'});
      };
      req.onsuccess = ()=> res(req.result);
      req.onerror = ()=> rej(req.error||new Error('Cannot open IDB'));
    });
  }
  function saveUpload(file, meta){
    // returns Promise resolving to { id, thumb } where thumb may be a dataURL
    // meta may include: title, channel, owner, category, visibility, channelAvatar
    return openDB().then(db=> new Promise(async (res,rej)=>{
      try{
        const tx = db.transaction(STORE,'readwrite');
        const store = tx.objectStore(STORE);
        const id = 'up-'+Date.now()+'-'+Math.random().toString(36).slice(2,8);
        const rec = Object.assign({id, name: file.name, size: file.size, ts: Date.now(), mime: file.type, visibility: 'public', owner: null, channelAvatar: null, category: 'home'}, meta||{});
        // generate a thumbnail for video files (dataURL) if possible
        let thumb = null;
        try{
          if(file && file.type && file.type.indexOf('video')===0){
            thumb = await generateVideoThumbnail(file);
            rec.thumbDataUrl = thumb;
          }
        }catch(e){ /* ignore thumbnail failures */ }
        const putReq = store.put(Object.assign(rec, {blob: file}));
        putReq.onsuccess = ()=>{ res({id, thumb: rec.thumbDataUrl||null}); db.close(); };
        putReq.onerror = ()=>{ rej(putReq.error); db.close(); };
      }catch(err){ rej(err); }
    }));
  }
  
  function getUploadMeta(id){
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readonly');
      const store = tx.objectStore(STORE);
      const r = store.get(id);
      r.onsuccess = ()=>{ const v = r.result; db.close(); if(v){ const copy = Object.assign({}, v); delete copy.blob; res(copy); } else res(null); };
      r.onerror = ()=>{ rej(r.error); db.close(); };
    }));
  }

  function updateUploadMeta(id, updates){
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readwrite');
      const store = tx.objectStore(STORE);
      const r = store.get(id);
      r.onsuccess = ()=>{
        const v = r.result;
        if(!v){ db.close(); res(null); return; }
        const merged = Object.assign({}, v, updates);
        const put = store.put(merged);
        put.onsuccess = ()=>{ db.close(); res(merged); };
        put.onerror = ()=>{ db.close(); rej(put.error); };
      };
      r.onerror = ()=>{ db.close(); rej(r.error); };
    }));
  }

  function deleteUpload(id){
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readwrite');
      const store = tx.objectStore(STORE);
      const r = store.delete(id);
      r.onsuccess = ()=>{ db.close(); res(true); };
      r.onerror = ()=>{ db.close(); rej(r.error); };
    }));
  }
  function listUploads(){
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readonly');
      const store = tx.objectStore(STORE);
      const items = [];
      store.openCursor().onsuccess = function(e){
        const cur = e.target.result;
        if(!cur){ res(items); db.close(); return; }
          const v = cur.value; items.push({id:v.id, name:v.name, size:v.size, ts:v.ts, mime:v.mime, thumb: v.thumbDataUrl || v.thumb || null, title: v.title||v.name, channel: v.channel||null, visibility: v.visibility||'public', owner: v.owner||null, category: v.category||'home', channelAvatar: v.channelAvatar||null, description: v.description||v.desc||''});
        cur.continue();
      };
      store.openCursor().onerror = ()=>{ rej(new Error('cursor error')); db.close(); };
    }));
  }
  function getUploadBlob(id){
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readonly');
      const store = tx.objectStore(STORE);
      const r = store.get(id);
      r.onsuccess = ()=>{ const v = r.result; db.close(); if(v) res(v.blob); else res(null); };
      r.onerror = ()=>{ rej(r.error); db.close(); };
    }));
  }
  window.YouShipUploads = { saveUpload, listUploads, getUploadBlob, getUploadMeta, updateUploadMeta, deleteUpload };

  // Helper: generate a thumbnail dataURL from a video File (uses video + canvas)
  function generateVideoThumbnail(file){
    return new Promise((resolve, reject)=>{
      try{
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;
        video.muted = true;
        video.playsInline = true;
        // when enough data loaded, seek to 0.5s
        const cleanup = ()=>{ try{ URL.revokeObjectURL(url); }catch(e){} try{ video.remove(); }catch(e){} };
        const onError = (e)=>{ cleanup(); reject(e || new Error('video error')); };
        video.addEventListener('error', onError);
        video.addEventListener('loadeddata', ()=>{
          // choose a time (0.5s or small percent)
          const seekTime = Math.min(0.5, Math.max(0, (video.duration || 0) * 0.1));
          const doSeek = ()=>{
            try{ video.currentTime = seekTime; }catch(e){}
          };
          video.addEventListener('seeked', ()=>{
            try{
              const canvas = document.createElement('canvas');
              const w = Math.min(480, video.videoWidth || 480);
              const h = Math.round(w * ((video.videoHeight || 270) / (video.videoWidth || 480)));
              canvas.width = w; canvas.height = h;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(video, 0, 0, w, h);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
              cleanup();
              resolve(dataUrl);
            }catch(err){ cleanup(); reject(err); }
          }, { once: true });
          // try seek
          doSeek();
          // fallback: if seeked not fired in 1.5s, capture whatever we have
          setTimeout(()=>{
            try{
              const canvas = document.createElement('canvas');
              const w = Math.min(480, video.videoWidth || 480);
              const h = Math.round(w * ((video.videoHeight || 270) / (video.videoWidth || 480)));
              canvas.width = w; canvas.height = h;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(video, 0, 0, w, h);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
              cleanup();
              resolve(dataUrl);
            }catch(err){ cleanup(); reject(err); }
          }, 1500);
        }, { once: true });
      }catch(e){ reject(e); }
    });
  }

})(window);
