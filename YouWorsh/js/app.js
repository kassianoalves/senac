// JS: carregamento dinâmico de videos.json, renderização de cards, filtro e controles avançados
(function () {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const favToggle = document.getElementById('favToggle');
    const modal = document.getElementById('videoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalChannel = document.getElementById('modalChannel');
    const playerPlaceholder = document.getElementById('playerPlaceholder');

    let videos = [];
    let pageSize = 6;
    let currentIndex = 0;
    let cards = [];
    let favorites = new Set();
    let showOnlyFavorites = false;

    // load/save favoritos
    function loadFavorites() {
        try {
            const raw = localStorage.getItem('ywfavorites');
            if (raw) {
                const arr = JSON.parse(raw);
                favorites = new Set(arr);
            }
        } catch (e) { favorites = new Set(); }
    }
    function saveFavorites() {
        localStorage.setItem('ywfavorites', JSON.stringify(Array.from(favorites)));
    }

    // Fetch videos.json
    async function loadVideos() {
        try {
            const res = await fetch('videos.json');
            if (!res.ok) throw new Error('Não foi possível carregar videos.json');
            videos = await res.json();
        } catch (err) {
            console.warn('Erro ao carregar videos.json', err);
            videos = [];
        }
        currentIndex = 0;
        renderNextPage();
    }

    function generateThumbDataURL(text) {
        const w = 480, h = 270;
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#2b2b2b'; ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#fff'; ctx.font = '28px Roboto, Arial';
        const lines = wrapText(ctx, text, w - 40);
        let y = 80;
        lines.forEach(line => { ctx.fillText(line, 20, y); y += 36; });
        return canvas.toDataURL();
    }
    function wrapText(ctx, text, maxWidth) {
        const words = text.split(' ');
        const lines = []; let line = '';
        words.forEach(w => {
            const test = line ? (line + ' ' + w) : w;
            const width = ctx.measureText(test).width;
            if (width > maxWidth) { lines.push(line); line = w; } else { line = test; }
        });
        if (line) lines.push(line);
        return lines.slice(0, 3);
    }

    function createCard(v) {
        const article = document.createElement('article');
        article.className = 'video-card';

        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        const img = document.createElement('img');
        img.alt = v.title;
        if (v.thumb) { img.src = v.thumb; }
        else { img.src = generateThumbDataURL(v.title); }
        img.style.cursor = 'pointer';
        thumb.appendChild(img);

        const meta = document.createElement('div');
        meta.className = 'meta';
        const avatar = document.createElement('div');
        avatar.className = 'avatar small';
        avatar.textContent = '◯';
        const info = document.createElement('div');
        info.className = 'info';
        const h3 = document.createElement('h3');
        h3.textContent = v.title;
        const p = document.createElement('p');
        p.className = 'channel';
        p.textContent = `${v.channel} • ${v.views} • ${v.age}`;

        const favBtn = document.createElement('button');
        favBtn.className = 'fav-btn';
        favBtn.title = 'Favoritar';
        favBtn.innerText = '☆';
        if (favorites.has(v.id)) { favBtn.classList.add('active'); favBtn.innerText = '★'; }

        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (favorites.has(v.id)) { favorites.delete(v.id); favBtn.classList.remove('active'); favBtn.innerText = '☆'; }
            else { favorites.add(v.id); favBtn.classList.add('active'); favBtn.innerText = '★'; }
            saveFavorites();
            updateLoadMoreVisibility();
        });

        // abrir modal ao clicar na thumbnail
        img.addEventListener('click', () => openModal(v));

        info.appendChild(h3);
        info.appendChild(p);
        meta.appendChild(avatar);
        meta.appendChild(info);
        meta.appendChild(favBtn);

        article.appendChild(thumb);
        article.appendChild(meta);
        return article;
    }

    function renderList(list, append = true) {
        const container = document.getElementById('videos');
        if (!append) container.innerHTML = '';
        list.forEach(v => {
            const article = createCard(v);
            container.appendChild(article);
        });
        cards = Array.from(container.querySelectorAll('.video-card'));
    }

    function renderNextPage() {
        const remaining = videos.length - currentIndex;
        if (remaining <= 0) { updateLoadMoreVisibility(); return; }
        const slice = videos.slice(currentIndex, currentIndex + pageSize);
        const toRender = showOnlyFavorites ? slice.filter(v => favorites.has(v.id)) : slice;
        renderList(toRender, currentIndex !== 0);
        currentIndex += pageSize;
        updateLoadMoreVisibility();
    }

    function updateLoadMoreVisibility() {
        if (!loadMoreBtn) return;
        if (currentIndex >= videos.length && !showOnlyFavorites) { loadMoreBtn.style.display = 'none'; }
        else { loadMoreBtn.style.display = 'inline-block'; }
    }

    function filter(q) {
        const t = q.trim().toLowerCase();
        const container = document.getElementById('videos');
        const items = Array.from(container.querySelectorAll('.video-card'));
        if (!t) { items.forEach(i => i.style.display = ''); return; }
        items.forEach(i => {
            const title = i.querySelector('h3').textContent.toLowerCase();
            i.style.display = title.includes(t) ? '' : 'none';
        });
    }

    // Modal Bootstrap
    const bsModal = modal ? new bootstrap.Modal(modal) : null;
    
    function openModal(v) {
        modalTitle.textContent = v.title;
        modalChannel.textContent = `${v.channel} • ${v.views} • ${v.age}`;
        playerPlaceholder.innerHTML = '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:48px;">▶</div>';
        if (bsModal) bsModal.show();
    }

    // Eventos públicos
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', () => renderNextPage());
    if (btn) btn.addEventListener('click', () => filter(input.value));
    if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') filter(input.value); });

    if (favToggle) {
        favToggle.addEventListener('click', () => {
            showOnlyFavorites = !showOnlyFavorites;
            favToggle.classList.toggle('active', showOnlyFavorites);
            const container = document.getElementById('videos'); container.innerHTML = '';
            currentIndex = 0;
            if (showOnlyFavorites) {
                const favItems = videos.filter(v => favorites.has(v.id));
                renderList(favItems, false);
                if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            } else {
                renderNextPage();
            }
        });
    }

    // Inicialização
    loadFavorites();
    loadVideos();
})();
