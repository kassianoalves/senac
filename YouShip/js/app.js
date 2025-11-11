/*
    app.js - YouShip client logic

    Responsabilidades:
    - Carregar lista de vídeos (js/cards.json) com fallback embutido
    - Aplicar filtros (relevância, recentes, mais vistos, por categoria)
    - Paginação (8 por página) com botão "Carregar mais" e infinite scroll
    - Renderizar cards dinamicamente em #cardsRow
    - Gerenciar histórico (localStorage: youshipHistory) e inscrições (youshipSubscriptions)
    - Navegar para video.html?id=<id> quando usuário clica em um card

    Dicas de personalização:
    - Altere pageSize para ajustar quantos vídeos por carregamento
    - Edite js/cards.json para adicionar/alterar vídeos (use 'id' e opcional 'file' para arquivos locais)
*/
document.addEventListener('DOMContentLoaded', ()=>{
        const container = document.getElementById('cardsRow');
    if(!container) return;

    // tentar buscar um JSON local (js/cards.json). Se falhar, usar dados embutidos.
    const fallbackVideos = [
        {title: 'Worship — Adoração (Exemplo)', channel: 'Canal YouShip', viewsText: '125 mil visualizações', viewsCount:125000, time: '2 dias', thumb: 'https://via.placeholder.com/480x270/ff7a00/ffffff?text=YouShip+Thumb', category:'louvor', ts:1700000000},
        {title: 'Live: Louvor ao Vivo', channel: 'YouShip Live', viewsText: '12 mil assistindo', viewsCount:12000, time: 'Agora', thumb: 'https://via.placeholder.com/480x270/ffd2b3/333333?text=Live+Now', category:'ao-vivo', ts:1700000500},
        {title: 'PodCast — Conversa com convidados', channel: 'Canal PodCast', viewsText: '8.4 mil visualizações', viewsCount:8400, time: '1 semana', thumb: 'https://via.placeholder.com/480x270/ffe6cc/333333?text=Podcast', category:'podcast', ts:1699000000},
        {title: 'Louvores recentes — Playlist', channel: 'YouShip Música', viewsText: '41 mil visualizações', viewsCount:41000, time: '3 dias', thumb: 'https://via.placeholder.com/480x270/ffd6a6/333333?text=Louvor', category:'louvor', ts:1700002000},
        {title: 'Vídeo de Ensino — Exemplo', channel: 'Canal Ensino', viewsText: '3.2 mil visualizações', viewsCount:3200, time: '5 dias', thumb: 'https://via.placeholder.com/480x270/ffc9a0/333333?text=Video', category:'home', ts:1700001000},
        {title: 'Sermão — Exemplo', channel: 'Canal Sermões', viewsText: '22 mil visualizações', viewsCount:22000, time: '1 mês', thumb: 'https://via.placeholder.com/480x270/ffb266/333333?text=Sermão', category:'ao-vivo', ts:1698000000},
        {title: 'Entrevista — Exemplo', channel: 'Canal Conversas', viewsText: '9.1 mil visualizações', viewsCount:9100, time: '2 semanas', thumb: 'https://via.placeholder.com/480x270/ffd9b8/333333?text=Entrevista', category:'podcast', ts:1699500000}
    ];

    // duplicar para simular muitos itens
    const bigList = [];
    for(let i=0;i<5;i++){
        fallbackVideos.forEach(v=> bigList.push(Object.assign({},v)));
    }

    let videos = bigList;
    // detectar categoria da página (index -> home, ao-vivo, louvor, podcast etc.)
    const pageCategory = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'home';
    const filterSelect = document.getElementById('filterSelect');
    let filteredVideos = [];

    // tentar carregar js/cards.json via fetch
    fetch('js/cards.json').then(r=>{
        if(!r.ok) throw new Error('no-json');
        return r.json();
    }).then(data=>{
        if(Array.isArray(data) && data.length) videos = data.concat(videos);
        applyFiltersAndInit();
    }).catch(()=>{
        applyFiltersAndInit();
    });

    // aplica filtros (categoria da página + filtro selecionado)
    function applyFiltersAndInit(){
        // garantir campos
        videos = videos.map(v=> Object.assign({viewsCount: v.viewsCount||0, ts: v.ts||0, views: v.viewsText||v.views||''}, v));
        applyFilter();
        initPagination();
    }

    function applyFilter(){
        // começar com cópia
        filteredVideos = videos.slice();
        // filtrar por página
        if(pageCategory && pageCategory !== 'home'){
            filteredVideos = filteredVideos.filter(v=> v.category === pageCategory);
        }
        // aplicar seleção
        const sel = filterSelect ? filterSelect.value : 'relevant';
        if(sel === 'recent'){
            filteredVideos.sort((a,b)=> (b.ts||0) - (a.ts||0));
        }else if(sel === 'views'){
            filteredVideos.sort((a,b)=> (b.viewsCount||0) - (a.viewsCount||0));
        }else if(sel === 'ao-vivo'){
            filteredVideos = filteredVideos.filter(v=> v.category === 'ao-vivo');
        }else if(sel === 'louvor'){
            filteredVideos = filteredVideos.filter(v=> v.category === 'louvor');
        }else if(sel === 'podcast'){
            filteredVideos = filteredVideos.filter(v=> v.category === 'podcast');
        }
    }

    // paginação simples
    const pageSize = 8;
    let page = 0;
    let loading = false;

    function buildCard(v){
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card shadow-sm h-100';

        const img = document.createElement('img');
        img.className = 'thumb card-img-top';
        img.src = v.thumb;
        img.alt = v.title;

        const body = document.createElement('div');
        body.className = 'card-body p-2 d-flex flex-column justify-content-between';

        const title = document.createElement('p');
        title.className = 'card-title mb-1';
        title.textContent = v.title;

        const meta = document.createElement('p');
        meta.className = 'video-meta mb-0';
        meta.textContent = `${v.channel} • ${v.viewsText || v.views || ''} • ${v.time}`;

        // subscribe button
        const subWrap = document.createElement('div');
        subWrap.className = 'd-flex justify-content-between align-items-center mt-2';
        const channelName = document.createElement('small');
        channelName.className = 'text-muted';
        channelName.textContent = v.channel;

        const subscribeBtn = document.createElement('button');
        subscribeBtn.className = 'btn btn-sm btn-outline-primary';
        subscribeBtn.textContent = isSubscribed(v.channel) ? 'Inscrito' : 'Inscrever-se';
        subscribeBtn.addEventListener('click', (e)=>{
            e.stopPropagation();
            const now = toggleSubscription(v.channel);
            subscribeBtn.textContent = now ? 'Inscrito' : 'Inscrever-se';
        });

        subWrap.appendChild(channelName);
        subWrap.appendChild(subscribeBtn);

        body.appendChild(title);
        body.appendChild(meta);
        body.appendChild(subWrap);

        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);

        // click on card => registrar histórico e navegar para a página de vídeo
        card.addEventListener('click', ()=>{
            try{ addToHistory(v); }catch(e){/* ignore */}
            // Se o vídeo tiver um id, navegamos para video.html?id=<id>
            const id = v.id || encodeURIComponent(v.title);
            window.location.href = `video.html?id=${encodeURIComponent(id)}`;
        });

        return col;
    }

    function renderNextPage(){
        if(loading) return;
        loading = true;
        const start = page * pageSize;
        const items = filteredVideos.slice(start, start + pageSize);
        items.forEach(v=> container.appendChild(buildCard(v)));
        page++;
        loading = false;
        // se esgotou os itens, remover o observer e botão de load
        if(page * pageSize >= filteredVideos.length){
            if(loadMoreBtn) loadMoreBtn.style.display = 'none';
            if(observer) observer.disconnect();
        }
    }

    // Load more button
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'btn btn-outline-secondary mt-3';
    loadMoreBtn.textContent = 'Carregar mais';
    loadMoreBtn.addEventListener('click', ()=> renderNextPage());

    function initPagination(){
        // limpar
        container.innerHTML = '';
        page = 0;
        renderNextPage();
        // adicionar botão abaixo
        const parent = container.parentElement;
        if(parent && !parent.querySelector('#loadMoreWrap')){
            const wrap = document.createElement('div');
            wrap.id = 'loadMoreWrap';
            wrap.className = 'd-flex justify-content-center';
            wrap.appendChild(loadMoreBtn);
            parent.appendChild(wrap);
        }

        // infinite scroll via IntersectionObserver no botão
        if('IntersectionObserver' in window){
            observer = new IntersectionObserver(entries=>{
                entries.forEach(entry=>{
                    if(entry.isIntersecting){
                        renderNextPage();
                    }
                });
            }, {rootMargin: '200px'});
            observer.observe(loadMoreBtn);
        }
    }

    let observer = null;

    // reagir a mudanças de filtro
    if(filterSelect){
        filterSelect.addEventListener('change', ()=>{
            applyFilter();
            if(observer) observer.disconnect();
            // reset
            container.innerHTML = '';
            page = 0;
            renderNextPage();
            // reattach observer
            if(observer && loadMoreBtn) observer.observe(loadMoreBtn);
        });
    }

    // adicionar histórico quando clicar em um card
    function addToHistory(v){
        try{
            const key = 'youshipHistory';
            const raw = localStorage.getItem(key);
            const arr = raw ? JSON.parse(raw) : [];
            arr.unshift(Object.assign({}, v, {viewedAt: Date.now()}));
            // limitar histórico a 200 itens
            localStorage.setItem(key, JSON.stringify(arr.slice(0,200)));
        }catch(e){ console.error(e); }
    }

    // subscriptions
    function toggleSubscription(channel){
        const key = 'youshipSubscriptions';
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        const idx = arr.indexOf(channel);
        if(idx === -1) arr.push(channel); else arr.splice(idx,1);
        localStorage.setItem(key, JSON.stringify(arr));
        return arr.indexOf(channel) !== -1;
    }

    function isSubscribed(channel){
        try{ const arr = JSON.parse(localStorage.getItem('youshipSubscriptions')||'[]'); return arr.indexOf(channel)!==-1;}catch(e){return false}
    }

});
