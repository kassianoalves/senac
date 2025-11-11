// media.js — funções para carregar JSONs de mídia e renderizar players
(async function(){
  function el(sel){ return document.querySelector(sel); }
  function create(tag, cls){ const t = document.createElement(tag); if(cls) t.className = cls; return t; }

  async function fetchJson(url){
    try{ const r = await fetch(url); if(!r.ok) return []; return await r.json(); }
    catch(e){ console.warn('fetchJson failed', url, e); return []; }
  }

  // Renderiza lista de áudios numa div container (pathJson é relativo, base é a pasta da página)
  async function renderAudioList(containerSelector, jsonPath, basePath){
    const container = document.querySelector(containerSelector);
    if(!container) return;
    container.innerHTML = '<p>Carregando...</p>';
    const list = await fetchJson(jsonPath);
    container.innerHTML = '';
    if(!list || list.length === 0){
      container.innerHTML = '<p>Nenhum arquivo encontrado.</p>';
      return;
    }
    list.forEach(item => {
      // usa classes do Bootstrap além das classes custom
      const card = create('div', 'card audio-card p-3');
      const left = create('div','card-body audio-left');
      const title = create('h5','card-title audio-title'); title.textContent = item.name;
      const player = create('audio'); player.controls = true; player.src = (basePath || '') + item.file; player.className = 'w-100';
      left.appendChild(title);
      left.appendChild(player);

      card.appendChild(left);
      container.appendChild(card);
    });
  }

  // expõe funções globais para páginas usarem
  window.YouWorshMedia = {
    renderAudioList
  };
})();
