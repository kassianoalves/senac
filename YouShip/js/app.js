document.addEventListener('DOMContentLoaded', ()=>{
    const container = document.getElementById('cardsRow');
    if(!container) return;

    // tentar buscar um JSON local (js/cards.json). Se falhar, usar dados embutidos.
    const fallbackVideos = [
        {title: 'Worship — Adoração (Exemplo)', channel: 'Canal YouShip', views: '125 mil visualizações', time: '2 dias', thumb: 'https://via.placeholder.com/480x270/ff7a00/ffffff?text=YouShip+Thumb'},
        {title: 'Live: Louvor ao Vivo', channel: 'YouShip Live', views: '12 mil assistindo', time: 'Agora', thumb: 'https://via.placeholder.com/480x270/ffd2b3/333333?text=Live+Now'},
        {title: 'PodCast — Conversa com convidados', channel: 'Canal PodCast', views: '8.4 mil visualizações', time: '1 semana', thumb: 'https://via.placeholder.com/480x270/ffe6cc/333333?text=Podcast'},
        {title: 'Louvores recentes — Playlist', channel: 'YouShip Música', views: '41 mil visualizações', time: '3 dias', thumb: 'https://via.placeholder.com/480x270/ffd6a6/333333?text=Louvor'},
        {title: 'Vídeo de Ensino — Exemplo', channel: 'Canal Ensino', views: '3.2 mil visualizações', time: '5 dias', thumb: 'https://via.placeholder.com/480x270/ffc9a0/333333?text=Video'},
        {title: 'Sermão — Exemplo', channel: 'Canal Sermões', views: '22 mil visualizações', time: '1 mês', thumb: 'https://via.placeholder.com/480x270/ffb266/333333?text=Sermão'},
        {title: 'Entrevista — Exemplo', channel: 'Canal Conversas', views: '9.1 mil visualizações', time: '2 semanas', thumb: 'https://via.placeholder.com/480x270/ffd9b8/333333?text=Entrevista'},
        // Duplicar itens para demonstrar paginação
    ];

    // duplicar para simular muitos itens
    const bigList = [];
    for(let i=0;i<5;i++){
        fallbackVideos.forEach(v=> bigList.push(Object.assign({},v)));
    }

    let videos = bigList;

    // tentar carregar js/cards.json via fetch
    fetch('js/cards.json').then(r=>{
        if(!r.ok) throw new Error('no-json');
        return r.json();
    }).then(data=>{
        if(Array.isArray(data) && data.length) videos = data.concat(videos);
        initPagination();
    }).catch(()=>{
        initPagination();
    });

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
        meta.textContent = `${v.channel} • ${v.views} • ${v.time}`;

        body.appendChild(title);
        body.appendChild(meta);
        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);
        return col;
    }

    function renderNextPage(){
        if(loading) return;
        loading = true;
        const start = page * pageSize;
        const items = videos.slice(start, start + pageSize);
        items.forEach(v=> container.appendChild(buildCard(v)));
        page++;
        loading = false;
        // se esgotou os itens, remover o observer e botão de load
        if(page * pageSize >= videos.length){
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

});
