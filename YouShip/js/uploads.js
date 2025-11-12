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
    return openDB().then(db=> new Promise((res,rej)=>{
      const tx = db.transaction(STORE,'readwrite');
      const store = tx.objectStore(STORE);
      const id = 'up-'+Date.now()+'-'+Math.random().toString(36).slice(2,8);
      const rec = Object.assign({id, name: file.name, size: file.size, ts: Date.now(), mime: file.type}, meta||{});
      // read file as blob and store it
      const putReq = store.put(Object.assign(rec, {blob: file}));
      putReq.onsuccess = ()=>{ res(id); db.close(); };
      putReq.onerror = ()=>{ rej(putReq.error); db.close(); };
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
        const v = cur.value; items.push({id:v.id, name:v.name, size:v.size, ts:v.ts, mime:v.mime});
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
  window.YouShipUploads = { saveUpload, listUploads, getUploadBlob };
})(window);
