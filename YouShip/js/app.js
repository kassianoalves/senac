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
/*
    Comentários (PT-BR) - como personalizar e onde adicionar conteúdo

    1) Estrutura de dados (js/cards.json)
         - Cada item do array representa um vídeo/clip/transmissão com campos comuns:
             {
                 id: 'v1',               // identificador único (string)
                 title: 'Título',        // título exibido
                 channel: 'Canal X',     // nome do canal/autoria
                 viewsText: '1.2 mil visualizações',
                 viewsCount: 1200,       // número puro (opcional mas útil para ordenar)
                 time: '2 dias' || 'Agora',
                 thumb: 'images/thumb1.jpg' || 'https://...placeholder',
                 category: 'louvor' || 'ao-vivo' || 'podcast' || 'teatro' || 'home',
                 ts: 1700000000,         // timestamp usado para ordenar recentes
                 file: 'clips/v1.mp4'    // opcional: arquivo local em /clips, /teatro_clips ou /podcasts
             }

         - Para que um vídeo apareça na página "Teatro", defina "category":"teatro".
         - Arquivos locais (mp4) devem ser colocados em pastas: `videos/` (player), `clips/` (músicas),
             `teatro_clips/` (teatro) ou `podcasts/` conforme sua organização. As thumbnails podem ficar em `images/`.

    2) Pastas criadas
         - `images/`        -> miniaturas e imagens relacionadas
         - `clips/`         -> clipes de música (mp4)
         - `teatro_clips/`  -> clipes/peças teatrais (mp4)
         - `podcasts/`      -> arquivos de podcast (mp3/mp4)

    3) Transmissões ao vivo (simulação local)
         - A página `html/transmitir.html` gera uma stream key demo e permite criar uma transmissão simulada
             gravada em `localStorage` sob a chave `liveStreams` (array). O `js/app.js` carrega `liveStreams`
             e as coloca no topo da lista de vídeos para que a página "Ao Vivo" mostre essas entradas com `time: 'Agora'`.
         - Estrutura de uma transmissão simulada (exemplo):
             { id: 'live-163...', title: 'Minha Live', channel: 'Meu Canal', viewsText: '0 assistindo', time: 'Agora', thumb: 'images/live.jpg', category: 'ao-vivo', live: true }

    4) Implementar transmissão real com OBS Studio
         - Este projeto é estático; para transmitir de verdade você precisa de um servidor RTMP. Fluxo resumido:
                 OBS -> RTMP server (ex.: nginx-rtmp) -> processo que converte/redistribui para HLS ou WebRTC -> site exibe via player HLS/WebRTC
         - A página `html/transmitir.html` explica o passo a passo e gera uma chave de teste local.

    5) Dicas rápidas de modificação
         - Para adicionar novos vídeos: edite `js/cards.json` e adicione objetos conforme o formato acima.
         - Para que o player local funcione com `file`, coloque o mp4 em `videos/` ou em uma das pastas criadas e referencie o caminho correto.
         - Se mover páginas entre pastas, verifique `js/header.js` (ele detecta /html/ e ajusta os caminhos).

*/
document.addEventListener('DOMContentLoaded', () => {
    // determinar prefixo para assets quando estamos dentro de /html/
    const inHtmlFolder = location.pathname.indexOf('/html/') !== -1;
    const assetsPrefix = inHtmlFolder ? '../' : '';

    // função para deduplicar vídeos por ID
    function deduplicateVideos(videosArray) {
        const seen = new Set();
        return videosArray.filter(video => {
            const id = video.id || video.title;
            if (seen.has(id)) {
                return false;
            }
            seen.add(id);
            return true;
        });
    }

    const container = document.getElementById('cardsRow');
    if (!container) return;

    // tentar buscar um JSON local (js/cards.json). Se falhar, usar dados embutidos.
    const fallbackVideos = [
        { title: 'Worship — Adoração (Exemplo)', channel: 'Canal YouShip', viewsText: '125 mil visualizações', viewsCount: 125000, time: '2 dias', thumb: 'https://via.placeholder.com/480x270/ff7a00/ffffff?text=YouShip+Thumb', category: 'louvor', ts: 1700000000 },
        { title: 'Live: Louvor ao Vivo', channel: 'YouShip Live', viewsText: '12 mil assistindo', viewsCount: 12000, time: 'Agora', thumb: 'https://via.placeholder.com/480x270/ffd2b3/333333?text=Live+Now', category: 'ao-vivo', ts: 1700000500 },
        { title: 'PodCast — Conversa com convidados', channel: 'Canal PodCast', viewsText: '8.4 mil visualizações', viewsCount: 8400, time: '1 semana', thumb: 'https://via.placeholder.com/480x270/ffe6cc/333333?text=Podcast', category: 'podcast', ts: 1699000000 },
        { title: 'Louvores recentes — Playlist', channel: 'YouShip Música', viewsText: '41 mil visualizações', viewsCount: 41000, time: '3 dias', thumb: 'https://via.placeholder.com/480x270/ffd6a6/333333?text=Louvor', category: 'louvor', ts: 1700002000 },
        { title: 'Vídeo de Ensino — Exemplo', channel: 'Canal Ensino', viewsText: '3.2 mil visualizações', viewsCount: 3200, time: '5 dias', thumb: 'https://via.placeholder.com/480x270/ffc9a0/333333?text=Video', category: 'home', ts: 1700001000 },
        { title: 'Sermão — Exemplo', channel: 'Canal Sermões', viewsText: '22 mil visualizações', viewsCount: 22000, time: '1 mês', thumb: 'https://via.placeholder.com/480x270/ffb266/333333?text=Sermão', category: 'ao-vivo', ts: 1698000000 },
        { title: 'Entrevista — Exemplo', channel: 'Canal Conversas', viewsText: '9.1 mil visualizações', viewsCount: 9100, time: '2 semanas', thumb: 'https://via.placeholder.com/480x270/ffd9b8/333333?text=Entrevista', category: 'podcast', ts: 1699500000 }
    ];

    // duplicar para simular muitos itens
    const bigList = [];
    for (let i = 0; i < 5; i++) {
        fallbackVideos.forEach(v => bigList.push(Object.assign({}, v)));
    }

    let videos = bigList;
    // detectar categoria da página (index -> home, ao-vivo, louvor, podcast etc.)
    const pageCategory = (document.body && document.body.dataset && document.body.dataset.page) ? document.body.dataset.page : 'home';
    const filterSelect = document.getElementById('filterSelect');
    const searchInput = document.getElementById('searchInput');
    let filteredVideos = [];
    let searchQuery = ''; // termo de pesquisa

    // tentar carregar js/cards.json via fetch (usa prefix quando necessário)
    fetch(`${assetsPrefix}js/cards.json`).then(r => {
        if (!r.ok) throw new Error('no-json');
        return r.json();
    }).then(data => {
        if (Array.isArray(data) && data.length) videos = data.concat(videos);
        // carregar transmissões simuladas (geradas em transmitir.html) do localStorage
        try {
            const liveRaw = localStorage.getItem('liveStreams');
            // Use IndexedDB for uploads instead of localStorage
            const currentAuth = localStorage.getItem('youshipAuth');
            YouShipUploads.listUploads().then(uploads => {
                const uploadsMapped = Array.isArray(uploads) ? uploads.map(u => ({ id: u.id, title: u.title || u.name, channel: u.channel, viewsText: '', thumb: u.thumb || u.thumbDataUrl || 'https://via.placeholder.com/480x270/ffb266/333333?text=Seu+Vídeo', category: u.category || 'home', ts: u.ts || Date.now(), description: u.description || u.desc || '', visibility: u.visibility || 'public', owner: u.owner || null, channelAvatar: u.channelAvatar || null })) : [];
                // filtrar uploads privados (mostrar apenas se for dono)
                const visibleUploads = uploadsMapped.filter(u => u.visibility === 'public' || (u.owner && currentAuth && u.owner === currentAuth));
                if (liveRaw) {
                    const liveArr = JSON.parse(liveRaw);
                    if (Array.isArray(liveArr) && liveArr.length) {
                        // uploads primeiro, depois lives, depois restante
                        videos = visibleUploads.concat(liveArr).concat(videos);
                    } else {
                        videos = visibleUploads.concat(videos);
                    }
                } else {
                    videos = visibleUploads.concat(videos);
                }
                applyFiltersAndInit();
            }).catch(e => {
                console.warn('Failed to load uploads from IndexedDB:', e);
                // fallback to localStorage if IDB fails
                try {
                    const uploadsRaw = localStorage.getItem('youshipUploads');
                    const uploads = uploadsRaw ? JSON.parse(uploadsRaw) : [];
                    const uploadsMapped = Array.isArray(uploads) ? uploads.map(u => ({ id: u.id, title: u.title, channel: u.channel, viewsText: '', thumb: u.thumb || u.thumbDataUrl || 'https://via.placeholder.com/480x270/ffb266/333333?text=Seu+Vídeo', category: u.category || 'home', ts: u.ts || Date.now(), description: u.description || u.desc || '', visibility: u.visibility || 'public', owner: u.owner || null, channelAvatar: u.channelAvatar || null })) : [];
                    const visibleUploads = uploadsMapped.filter(u => u.visibility === 'public' || (u.owner && currentAuth && u.owner === currentAuth));
                    if (liveRaw) {
                        const liveArr = JSON.parse(liveRaw);
                        if (Array.isArray(liveArr) && liveArr.length) {
                            videos = visibleUploads.concat(liveArr).concat(videos);
                        } else {
                            videos = visibleUploads.concat(videos);
                        }
                    } else {
                        videos = visibleUploads.concat(videos);
                    }
                } catch (e2) {
                    console.warn('Fallback to localStorage also failed:', e2);
                }
                applyFiltersAndInit();
            });
        } catch (e) {
            // se parsing falhar, ainda tentamos adicionar uploads simples
            try { const uploadsRaw2 = localStorage.getItem('youshipUploads'); const uploads2 = uploadsRaw2 ? JSON.parse(uploadsRaw2) : []; const uploadsMapped2 = Array.isArray(uploads2) ? uploads2.map(u => ({ id: u.id, title: u.title, channel: u.channel, viewsText: '', thumb: 'https://via.placeholder.com/480x270/ffb266/333333?text=Seu+Vídeo', category: 'home', ts: u.ts || Date.now() })) : []; videos = uploadsMapped2.concat(videos); } catch (e2) { }
            applyFiltersAndInit();
        }
        applyFiltersAndInit();
    }).catch(() => {
        // também tentar carregar transmissões simuladas e uploads mesmo se o fetch falhar
        try {
            const liveRaw = localStorage.getItem('liveStreams');
            const uploadsRaw = localStorage.getItem('youshipUploads');
            const uploads = uploadsRaw ? JSON.parse(uploadsRaw) : [];
            const uploadsMapped = Array.isArray(uploads) ? uploads.map(u => ({ id: u.id, title: u.title, channel: u.channel, viewsText: '', thumb: u.thumb || u.thumbDataUrl || 'https://via.placeholder.com/480x270/ffb266/333333?text=Seu+Vídeo', category: 'home', ts: u.ts || Date.now() })) : [];
            if (liveRaw) {
                const liveArr = JSON.parse(liveRaw);
                if (Array.isArray(liveArr) && liveArr.length) { videos = uploadsMapped.concat(liveArr).concat(videos); }
                else videos = uploadsMapped.concat(videos);
            } else {
                videos = uploadsMapped.concat(videos);
            }
        } catch (e) {
            try { const uploadsRaw2 = localStorage.getItem('youshipUploads'); const uploads2 = uploadsRaw2 ? JSON.parse(uploadsRaw2) : []; const uploadsMapped2 = Array.isArray(uploads2) ? uploads2.map(u => ({ id: u.id, title: u.title, channel: u.channel, viewsText: '', thumb: 'https://via.placeholder.com/480x270/ffb266/333333?text=Seu+Vídeo', category: 'home', ts: u.ts || Date.now() })) : []; videos = uploadsMapped2.concat(videos); } catch (e2) { }
        }
        applyFiltersAndInit();
    });

    // aplica filtros (categoria da página + filtro selecionado)
    function applyFiltersAndInit() {
        // garantir campos
        videos = videos.map(v => Object.assign({ viewsCount: v.viewsCount || 0, ts: v.ts || 0, views: v.viewsText || v.views || '' }, v));
        applyFilter();
        initPagination();
    }

    function applyFilter() {
        // começar com cópia
        filteredVideos = videos.slice();
        // filtrar por página
            if(pageCategory && pageCategory !== 'home'){
                filteredVideos = filteredVideos.filter(v => v.category === pageCategory);
        }
        // aplicar pesquisa se houver
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filteredVideos = filteredVideos.filter(v =>
                (v.title && v.title.toLowerCase().includes(query)) ||
                (v.channel && v.channel.toLowerCase().includes(query))
            );
        }
        // aplicar seleção
        const sel = filterSelect ? filterSelect.value : 'relevant';
        if (sel === 'recent') {
            filteredVideos.sort((a, b) => (b.ts || 0) - (a.ts || 0));
        } else if (sel === 'views') {
            filteredVideos.sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0));
        } else if (sel === 'starting') {
            // transmissões iniciando/ao vivo (heurística: time contém 'Agora' ou viewsText contém 'assistindo')
            filteredVideos = filteredVideos.filter(v => (typeof v.time === 'string' && v.time.toLowerCase().indexOf('agora') !== -1) || (typeof v.viewsText === 'string' && v.viewsText.toLowerCase().indexOf('assistindo') !== -1));
        } else if (sel === 'ao-vivo') {
            filteredVideos = filteredVideos.filter(v => v.category === 'ao-vivo');
        } else if (sel === 'louvor') {
            filteredVideos = filteredVideos.filter(v => v.category === 'louvor');
        } else if (sel === 'podcast') {
            filteredVideos = filteredVideos.filter(v => v.category === 'podcast');
        }
    }

    // paginação simples
    const pageSize = 6;
    let page = 0;
    let loading = false;

    function buildCard(v) {
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
        meta.textContent = `${v.viewsText || v.views || ''} • ${v.time}`;

        // subscribe / channel info
        const subWrap = document.createElement('div');
        subWrap.className = 'd-flex justify-content-between align-items-center mt-2';
        // channel with avatar + link
        const channelWrap = document.createElement('div');
        channelWrap.className = 'd-flex align-items-center gap-2';
        const avatarImg = document.createElement('img');
        avatarImg.className = 'rounded-circle';
        avatarImg.style.width = '32px'; avatarImg.style.height = '32px'; avatarImg.style.objectFit = 'cover';
        avatarImg.src = v.channelAvatar || (v.channelAvatar === null ? 'https://via.placeholder.com/32' : (v.channelAvatar || 'https://via.placeholder.com/32'));
        const channelAnchor = document.createElement('a');
        channelAnchor.className = 'small text-decoration-none text-muted';
        const channelNameText = v.channel || '';
        const channelHref = inHtmlFolder ? `channel-view.html?channel=${encodeURIComponent(channelNameText)}` : `html/channel-view.html?channel=${encodeURIComponent(channelNameText)}`;
        channelAnchor.href = channelHref;
        channelAnchor.textContent = channelNameText;
        channelWrap.appendChild(avatarImg);
        channelWrap.appendChild(channelAnchor);

        const subscribeBtn = document.createElement('button');
        subscribeBtn.className = 'btn btn-sm btn-outline-primary';
        subscribeBtn.textContent = isSubscribed(v.channel) ? 'Inscrito' : 'Inscrever-se';
        subscribeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const now = toggleSubscription(v.channel);
            // se retornou null, redirecionamos para login/cadastro — não atualizamos o texto
            if (now === null) return;
            subscribeBtn.textContent = now ? 'Inscrito' : 'Inscrever-se';
        });

        subWrap.appendChild(channelWrap);
        subWrap.appendChild(subscribeBtn);

        body.appendChild(title);
        body.appendChild(meta);
        body.appendChild(subWrap);

        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);

        // click on card => registrar histórico e navegar para a página de vídeo
        card.addEventListener('click', () => {
            try { addToHistory(v); } catch (e) {/* ignore */ }
            // Se o vídeo tiver um id, navegamos para video.html?id=<id>
            const id = v.id || encodeURIComponent(v.title);
            // se estivermos em /html/ o player está na mesma pasta; caso contrário está em html/video.html
            const videoTarget = location.pathname.indexOf('/html/') !== -1 ? 'video.html' : 'html/video.html';
            window.location.href = `${videoTarget}?id=${encodeURIComponent(id)}`;
        });

        return col;
    }

    function renderNextPage() {
        if (loading) return;
        loading = true;
        const start = page * pageSize;
        const items = filteredVideos.slice(start, start + pageSize);
        items.forEach(v => container.appendChild(buildCard(v)));
        page++;
        loading = false;
        // se esgotou os itens, remover o observer e botão de load
        if (page * pageSize >= filteredVideos.length) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            if (observer) observer.disconnect();
        }
    }

    // Load more button
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'btn btn-outline-secondary mt-3';
    loadMoreBtn.textContent = 'Carregar mais';
    loadMoreBtn.addEventListener('click', () => renderNextPage());

    function initPagination() {
        // limpar
        container.innerHTML = '';
        page = 0;
        renderNextPage();
        // adicionar botão abaixo
        const parent = container.parentElement;
        if (parent && !parent.querySelector('#loadMoreWrap')) {
            const wrap = document.createElement('div');
            wrap.id = 'loadMoreWrap';
            wrap.className = 'd-flex justify-content-center';
            wrap.appendChild(loadMoreBtn);
            parent.appendChild(wrap);
        }

        // infinite scroll via IntersectionObserver no botão
        if ('IntersectionObserver' in window) {
            observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        renderNextPage();
                    }
                });
            }, { rootMargin: '200px' });
            observer.observe(loadMoreBtn);
        }
    }

    let observer = null;

    // reagir a mudanças de filtro
    if (filterSelect) {
        filterSelect.addEventListener('change', () => {
            applyFilter();
            if (observer) observer.disconnect();
            // reset
            container.innerHTML = '';
            page = 0;
            renderNextPage();
            // reattach observer
            if (observer && loadMoreBtn) observer.observe(loadMoreBtn);
        });
    }

    // reagir a mudanças de pesquisa
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            applyFilter();
            if (observer) observer.disconnect();
            // reset
            container.innerHTML = '';
            page = 0;
            renderNextPage();
            // reattach observer
            if (observer && loadMoreBtn) observer.observe(loadMoreBtn);
        });
    }

    // adicionar histórico quando clicar em um card
    function addToHistory(v) {
        try {
            const key = 'youshipHistory';
            const raw = localStorage.getItem(key);
            const arr = raw ? JSON.parse(raw) : [];
            arr.unshift(Object.assign({}, v, { viewedAt: Date.now() }));
            // limitar histórico a 200 itens
            localStorage.setItem(key, JSON.stringify(arr.slice(0, 200)));
        } catch (e) { console.error(e); }
    }

    // subscriptions (exige autenticação)
    function toggleSubscription(channel) {
        const auth = localStorage.getItem('youshipAuth');
        const inHtml = location.pathname.indexOf('/html/') !== -1;
        const loginPath = inHtml ? 'login.html' : 'html/login.html';
        const registerPath = inHtml ? 'cadastro.html' : 'html/cadastro.html';
        if (!auth) {
            const go = confirm('Você precisa entrar para se inscrever neste canal. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)');
            if (go) window.location.href = loginPath; else window.location.href = registerPath;
            return null; // sinal de redirecionamento
        }
        const key = 'youshipSubscriptions';
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        const idx = arr.indexOf(channel);
        if (idx === -1) arr.push(channel); else arr.splice(idx, 1);
        localStorage.setItem(key, JSON.stringify(arr));
        return arr.indexOf(channel) !== -1;
    }

    function isSubscribed(channel) {
        try { const arr = JSON.parse(localStorage.getItem('youshipSubscriptions') || '[]'); return arr.indexOf(channel) !== -1; } catch (e) { return false }
    }

});
