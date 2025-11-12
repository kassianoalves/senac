// header.js - injeta um cabeçalho/offcanvas/banner reutilizável
// Este script deve ser incluído antes de `js/app.js` nas páginas.
//
// Comentários (PT-BR):
// - Para editar links do menu principal, altere as constantes abaixo (homeLink, aoLink, louvorLink, podcastLink, teatroLink, transmitirLink).
// - O script detecta se a página atual está dentro de /html/ e ajusta os caminhos automaticamente (variável `inHtml`).
// - O offcanvas (menu mobile) e a sidebar usam os mesmos hrefs; se criar novas páginas, adicione aqui o link correspondente.
// - O menu do usuário (Criar conta / Entrar / Perfil / Sair) é renderizado dinamicamente lendo `localStorage.youshipAuth` e `localStorage.youshipUser`.
// - Para exibir um novo item fixo na sidebar (desktop), é necessário também atualizar os arquivos em `html/` que possuem a sidebar estática.
(function(){
  // calcular se estamos dentro da pasta /html/
  const inHtml = location.pathname.indexOf('/html/') !== -1;
  // links dependem se estamos dentro de /html/ (para evitar duplicar 'html/html/...')
  const homeLink = inHtml ? '../index.html' : 'index.html';
  const aoLink = inHtml ? 'ao-vivo.html' : 'html/ao-vivo.html';
  const louvorLink = inHtml ? 'louvor.html' : 'html/louvor.html';
  const podcastLink = inHtml ? 'podcast.html' : 'html/podcast.html';
  const teatroLink = inHtml ? 'teatro.html' : 'html/teatro.html';
  const transmitirLink = inHtml ? 'transmitir.html' : 'html/transmitir.html';
  const perfilLink = inHtml ? 'perfil.html' : 'html/perfil.html';
  const loginLink = inHtml ? 'login.html' : 'html/login.html';
  const registerLink = inHtml ? 'cadastro.html' : 'html/cadastro.html';

  const container = document.createElement('div');
  container.id = 'youship-header';

  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-youship px-3">
      <div class="container-fluid">
        <button class="btn btn-link text-decoration-none d-md-none me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
          <i class="bi bi-list" style="font-size:1.25rem; color:var(--youship-dark)"></i>
        </button>
  <a class="navbar-brand d-flex align-items-center gap-2" href="${homeLink}">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="24" height="24" rx="4" fill="var(--youship-orange)" />
            <path d="M9 8l6 4-6 4V8z" fill="#ffffffff" />
          </svg>
          <span class="brand">YouShip</span>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbar" aria-controls="topbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="topbar">
          <form class="d-flex mx-auto w-50" role="search">
            <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar">
            <button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button>
          </form>

          <ul class="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li class="nav-item">
              <a class="nav-link" href="#" id="createContentBtn" title="Criar conteúdo" data-bs-toggle="modal" data-bs-target="#createContentModal"><i class="bi bi-camera-reels" style="font-size:1.2rem; color:var(--youship-orange)"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" title="Notificações"><i class="bi bi-bell" style="font-size:1.2rem"></i></a>
            </li>
            <li class="nav-item dropdown" id="userMenuWrap">
              <a class="nav-link dropdown-toggle" href="#" id="userMenuButton" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle" style="font-size:1.35rem"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenuButton" id="userMenu">
                <!-- items serão atualizados por JS -->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Offcanvas sidebar -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="sidebarOffcanvasLabel">YouShip</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <nav class="nav flex-column">
          <a class="nav-link" href="${homeLink}"><i class="bi bi-house-door-fill me-2"></i>Início</a>
          <a class="nav-link" href="${aoLink}"><i class="bi bi-broadcast-pin me-2"></i>Ao Vivo</a>
          <a class="nav-link" href="${louvorLink}"><i class="bi bi-music-note-list me-2"></i>Louvor</a>
          <a class="nav-link" href="${podcastLink}"><i class="bi bi-mic-fill me-2"></i>PodCast</a>
          <a class="nav-link" href="${teatroLink}"><i class="bi bi-easel me-2"></i>Teatro</a>
          <a class="nav-link" href="${transmitirLink}"><i class="bi bi-camera-reels me-2"></i>Transmitir</a>
          <hr>
        </nav>
      </div>
    </div>

    <!-- Banner -->
    <div class="container-fluid mt-3"><div class="row"><div class="col-12"><div id="bannerArea" class="p-3 mb-3 rounded-3 text-white" style="background:linear-gradient(90deg,var(--youship-orange),#ff944d)"><div class="d-flex justify-content-between align-items-center"><div><strong>Espaço de banner/ anúncio</strong><div class="small">Coloque aqui campanhas, promoções ou anúncios.</div></div><div><a href="#" class="btn btn-sm btn-light text-dark">Saber mais</a></div></div></div></div></div>
  `;

  // modal para Criar Conteúdo (upload, transmitir, criar canal)
  const modalHtml = `
  <div class="modal fade" id="createContentModal" tabindex="-1" aria-labelledby="createContentModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createContentModalLabel">Criar conteúdo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="d-grid gap-2">
            <div class="d-flex gap-2 align-items-center mb-2">
              <select id="uploadCategorySelect" class="form-select form-select-sm">
                <option value="home">Início</option>
                <option value="ao-vivo">Ao Vivo</option>
                <option value="louvor">Louvor</option>
                <option value="podcast">PodCast</option>
                <option value="teatro">Teatro</option>
              </select>
              <select id="uploadVisibilitySelect" class="form-select form-select-sm" style="width:170px">
                <option value="public">Público</option>
                <option value="private">Privado (somente você)</option>
              </select>
            </div>
            <button id="uploadVideoBtn" class="btn btn-outline-primary">Enviar vídeo do computador</button>
            <button id="goTransmitBtn" class="btn btn-outline-secondary">Transmitir ao vivo</button>
            <button id="createChannelBtn" class="btn btn-outline-warning">Criar canal</button>
          </div>
          <input id="fileUploadInput" type="file" accept="video/*" style="display:none" />
        </div>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.body.insertBefore(container, document.body.firstChild);

  // aplicar configurações globais de js/config.js quando disponível
  try{
    const applyCfg = ()=>{
      try{
        if(window.YouShipConfig){
          const cfg = window.YouShipConfig;
          if(cfg.siteTitle){ const brandEl = document.querySelector('#youship-header .brand'); if(brandEl) brandEl.textContent = cfg.siteTitle; }
          if(cfg.bannerHtml){ const b = document.getElementById('bannerArea'); if(b) b.innerHTML = cfg.bannerHtml; }
          if(cfg.brandSVG){ const brandWrap = document.querySelector('#youship-header .navbar-brand'); if(brandWrap){ brandWrap.innerHTML = cfg.brandSVG + '<span class="brand">' + (cfg.siteTitle||'YouShip') + '</span>'; } }
        }
      }catch(e){/* ignore */}
    };
    if(window.YouShipConfig) applyCfg();
    else{
      // tentar carregar js/config.js automaticamente
      const cfgPath = inHtml ? '../js/config.js' : 'js/config.js';
      const s = document.createElement('script'); s.src = cfgPath; s.onload = ()=> setTimeout(applyCfg, 10); s.onerror = ()=>{/* no config available */}; document.head.appendChild(s);
    }
  }catch(e){/* ignore config errors */}

  // aplicar tema salvo no localStorage (youshipTheme) para sobresscrever variáveis CSS
  try{
    const themeRaw = localStorage.getItem('youshipTheme');
    if(themeRaw){
      const th = JSON.parse(themeRaw);
      const root = document.documentElement.style;
      if(th.main) root.setProperty('--youship-orange', th.main);
      if(th.dark) root.setProperty('--youship-dark', th.dark);
      if(th.bg) root.setProperty('--youship-bg', th.bg);
      if(th.radius) root.setProperty('--youship-radius', th.radius + 'px');
    }
  }catch(e){/* ignore theme errors */}

  // injetar footer global (tenta carregar include local)
  try{
    const footerPath = inHtml ? '../html/includes/footer.html' : 'html/includes/footer.html';
    fetch(footerPath).then(r=> r.ok ? r.text() : Promise.reject()).then(html=>{
      try{ const div = document.createElement('div'); div.innerHTML = html; document.body.appendChild(div.firstElementChild); }catch(e){}
    }).catch(()=>{
      // fallback em linha se include não existir
      const fallback = document.createElement('div'); fallback.className = 'youship-footer'; fallback.innerHTML = '<div class="container"><div class="row"><div class="col">YouShip</div></div></div>';
      document.body.appendChild(fallback);
    });
  }catch(e){/* ignore footer injection */}

  // Gerenciar menu do usuário de forma simples (localStorage: youshipAuth, youshipUser)
  function renderUserMenu(){
    const menu = document.getElementById('userMenu');
    if(!menu) return;
    menu.innerHTML = '';
    const auth = localStorage.getItem('youshipAuth');
  const loginHref = loginLink;
  const registerHref = registerLink;
  const perfilHref = perfilLink;
    if(!auth){
      // não logado: opções rápidas
      const li1 = document.createElement('li');
      li1.innerHTML = `<a class="dropdown-item" href="${registerHref}">Criar conta</a>`;
      const li2 = document.createElement('li');
      li2.innerHTML = `<a class="dropdown-item" href="${loginHref}">Entrar</a>`;
      menu.appendChild(li1);
      menu.appendChild(li2);
    }else{
      // logado: mostrar perfil, canal, meus vídeos, transmitir e sair
      const userRaw = localStorage.getItem('youshipUser');
      let name = auth;
      try{ const u = JSON.parse(userRaw); if(u && u.name) name = u.name; }catch(e){}

      const li1 = document.createElement('li');
      li1.innerHTML = `<a class="dropdown-item" href="${perfilHref}">Olá, ${name}</a>`;
      const liChannel = document.createElement('li');
      const channelHref = inHtml ? 'channel.html' : 'html/channel.html';
      liChannel.innerHTML = `<a class="dropdown-item" href="${channelHref}">Meu canal</a>`;
      const liMyVideos = document.createElement('li');
      const myVideosHref = inHtml ? 'meus-videos.html' : 'html/meus-videos.html';
      liMyVideos.innerHTML = `<a class="dropdown-item" href="${myVideosHref}">Meus vídeos</a>`;
      const liMyClipes = document.createElement('li');
      const myClipesHref = inHtml ? 'meus-clipes.html' : 'html/meus-clipes.html';
      liMyClipes.innerHTML = `<a class="dropdown-item" href="${myClipesHref}">Meus clipes</a>`;
      const liTransmit = document.createElement('li');
      const transmitCfg = inHtml ? 'transmit-config.html' : 'html/transmit-config.html';
      liTransmit.innerHTML = `<a class="dropdown-item" href="${transmitCfg}">Transmitir (Configurar)</a>`;
      const li2 = document.createElement('li');
      li2.innerHTML = `<a class="dropdown-item" href="#" id="logoutBtn">Sair</a>`;

      menu.appendChild(li1);
      menu.appendChild(liChannel);
      menu.appendChild(liMyVideos);
      menu.appendChild(liMyClipes);
      menu.appendChild(liTransmit);
      const divider = document.createElement('li'); divider.innerHTML = '<hr class="dropdown-divider">'; menu.appendChild(divider);
      menu.appendChild(li2);

      // logout
      setTimeout(()=>{
        const lb = document.getElementById('logoutBtn');
        if(lb) lb.addEventListener('click', (e)=>{ e.preventDefault(); localStorage.removeItem('youshipAuth'); localStorage.removeItem('youshipUser'); localStorage.removeItem('youshipSubscriptions'); location.reload(); });
      }, 50);
    }
    // ajustar o botão do menu (avatar) no topo sempre que renderizar
    try{
      const btn = document.getElementById('userMenuButton');
      if(btn){
        const userRaw = localStorage.getItem('youshipUser');
        let avatar = null;
        try{ const u = userRaw?JSON.parse(userRaw):null; if(u && u.channel && u.channel.avatarDataUrl) avatar = u.channel.avatarDataUrl; else if(u && u.avatarDataUrl) avatar = u.avatarDataUrl; }catch(e){}
        if(avatar){ btn.innerHTML = `<img src="${avatar}" alt="avatar" class="rounded-circle" style="width:36px;height:36px;object-fit:cover">`; }
        else { btn.innerHTML = '<i class="bi bi-person-circle" style="font-size:1.35rem"></i>'; }
      }
    }catch(e){/* ignore */}
  }

  // render no load
  renderUserMenu();
  // interceptar clicks em links que levam à página de transmissão
  // Se o usuário não estiver autenticado, perguntamos se quer entrar ou criar conta
  function interceptTransmitClicks(){
    document.addEventListener('click', function(e){
      const a = e.target.closest ? e.target.closest('a') : null;
      if(!a) return;
      const href = a.getAttribute('href') || '';
      // normalizar href relativo (pegar só o final)
      const end = href.split('/').pop();
      if(end === 'transmitir.html'){
        const auth = localStorage.getItem('youshipAuth');
        if(!auth){
          e.preventDefault();
          const go = confirm('Você precisa entrar para acessar Transmitir. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)');
          if(go) window.location.href = loginLink; else window.location.href = registerLink;
        }
      }
    });
  }
  interceptTransmitClicks();
  // popular lista de inscrições na sidebar (se existirem e usuário logado)
  function renderSidebarSubscriptions(){
    try{
      const auth = localStorage.getItem('youshipAuth');
      const subs = JSON.parse(localStorage.getItem('youshipSubscriptions')||'[]');
      // procurar um placeholder nas sidebars estáticas
      const targets = document.querySelectorAll('.sidebar');
      targets.forEach(side=>{
        let wrap = side.querySelector('#subsSidebar');
        if(!wrap){
          wrap = document.createElement('div'); wrap.id='subsSidebar'; wrap.className='mt-3'; side.appendChild(wrap);
        }
        if(!auth){ wrap.innerHTML = ''; return; }
        if(!subs || subs.length===0){ wrap.innerHTML = '<div class="small text-muted">Nenhuma inscrição.</div>'; return; }
        // tentar buscar avatar do canal em youshipChannels
        const channelsRaw = localStorage.getItem('youshipChannels');
        const channels = channelsRaw ? JSON.parse(channelsRaw) : [];
        wrap.innerHTML = '<h6 class="mt-2">Inscrições</h6>' + subs.map(s=>{
          const ch = (channels.find(c=>c.name===s) || {});
          const avatar = ch.avatarDataUrl || null;
          const href = inHtml ? `channel-view.html?channel=${encodeURIComponent(s)}` : `html/channel-view.html?channel=${encodeURIComponent(s)}`;
          return `<a class="d-flex align-items-center gap-2 py-1 text-decoration-none" href="${href}"><img src="${avatar||'https://via.placeholder.com/32'}" class="rounded-circle" width="32" height="32" alt=""><div class="small">${s}</div></a>`;
        }).join('');
      });
    }catch(e){ /* ignore */ }
  }
  renderSidebarSubscriptions();
  window.addEventListener('storage', (e)=>{ if(e.key==='youshipSubscriptions' || e.key==='youshipAuth') renderSidebarSubscriptions(); });
  
  // hook para upload de vídeo (botão do modal)
  try{
    const uploadBtn = document.getElementById('uploadVideoBtn');
    const fileInput = document.getElementById('fileUploadInput');
    if(uploadBtn && fileInput){
      uploadBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        fileInput.value = '';
        // se helper de uploads não estiver carregado, carregá-lo dinamicamente
        if(!window.YouShipUploads){
          const script = document.createElement('script');
          script.src = inHtml ? '../js/uploads.js' : 'js/uploads.js';
          script.onload = ()=> fileInput.click();
          script.onerror = ()=> alert('Não foi possível carregar o módulo de upload.');
          document.head.appendChild(script);
        }else{
          fileInput.click();
        }
      });
      fileInput.addEventListener('change', async (e)=>{
        const f = e.target.files && e.target.files[0];
        if(!f) return;
        // exigir autenticação para upload
        const auth = localStorage.getItem('youshipAuth');
        if(!auth){
          const go = confirm('Você precisa entrar para enviar vídeos. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)');
          if(go) window.location.href = loginLink; else window.location.href = registerLink;
          return;
        }
        if(!window.YouShipUploads || !YouShipUploads.saveUpload){
          alert('Funcionalidade de upload não está disponível neste navegador.');
          return;
        }
        try{
          // salvar blob no IndexedDB
          const userRaw = localStorage.getItem('youshipUser');
          let channel = auth;
          let channelAvatar = null;
          try{ const u = JSON.parse(userRaw); if(u && u.channel && u.channel.name) channel = u.channel.name; if(u && u.channel && u.channel.avatarDataUrl) channelAvatar = u.channel.avatarDataUrl; else if(u && u.avatarDataUrl) channelAvatar = u.avatarDataUrl; }catch(e){}
          // ler categoria/visibilidade selecionadas no modal
          const catEl = document.getElementById('uploadCategorySelect');
          const visEl = document.getElementById('uploadVisibilitySelect');
          const category = catEl ? catEl.value : 'home';
          const visibility = visEl ? visEl.value : 'public';
          const result = await YouShipUploads.saveUpload(f, { title: f.name, channel, owner: auth, category, visibility, channelAvatar });
          const id = result && result.id ? result.id : result;
          const thumb = result && result.thumb ? result.thumb : null;
          // registrar metadados simples em localStorage para que o feed carregue o upload
          const metaRaw = localStorage.getItem('youshipUploads');
          const arr = metaRaw ? JSON.parse(metaRaw) : [];
          arr.unshift({ id, title: f.name, channel, ts: Date.now(), mime: f.type, size: f.size, thumb, category: category, visibility: visibility, owner: auth, channelAvatar: channelAvatar });
          localStorage.setItem('youshipUploads', JSON.stringify(arr));
          // fechar modal e ir para a página de vídeo
          const modalEl = document.getElementById('createContentModal');
          try{ const modal = bootstrap.Modal.getInstance(modalEl); if(modal) modal.hide(); }catch(e){}
          const videoTarget = inHtml ? 'video.html' : 'html/video.html';
          window.location.href = `${videoTarget}?id=${encodeURIComponent(id)}&source=upload`;
        }catch(err){
          console.error(err);
          alert('Ocorreu um erro ao salvar o vídeo: ' + (err && err.message ? err.message : err));
        }
      });
    }
  }catch(e){ console.warn('Upload hookup failed', e); }
  // garantir que os botões do modal apontem para as novas páginas (e exijam login)
  try{
    const modalGoTransmit = document.getElementById('goTransmitBtn');
    const modalCreateChannel = document.getElementById('createChannelBtn');
    const fileInput = document.getElementById('fileUploadInput');
    if(modalGoTransmit){
      modalGoTransmit.addEventListener('click', (e)=>{
        e.preventDefault();
        const authNow = localStorage.getItem('youshipAuth');
        if(!authNow){ const go = confirm('Você precisa entrar para transmitir. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)'); if(go) window.location.href = loginLink; else window.location.href = registerLink; return; }
        const target = inHtml ? 'transmit-config.html' : 'html/transmit-config.html';
        // fechar modal
        try{ const modalEl = document.getElementById('createContentModal'); const modal = bootstrap.Modal.getInstance(modalEl); if(modal) modal.hide(); }catch(e){}
        window.location.href = target;
      });
    }
    if(modalCreateChannel){
      modalCreateChannel.addEventListener('click', (e)=>{
        e.preventDefault();
        const authNow = localStorage.getItem('youshipAuth');
        if(!authNow){ const go = confirm('Você precisa entrar para criar/acessar canal. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)'); if(go) window.location.href = loginLink; else window.location.href = registerLink; return; }
        const target = inHtml ? 'channel.html' : 'html/channel.html';
        try{ const modalEl = document.getElementById('createContentModal'); const modal = bootstrap.Modal.getInstance(modalEl); if(modal) modal.hide(); }catch(e){}
        window.location.href = target;
      });
    }
    // also ensure upload button in modal opens fileInput (handled earlier) — keep existing behavior
  }catch(e){ /* ignore */ }
  
  // criar um dropdown simples no ícone de criar conteúdo (para aparecer como no menu de perfil)
  function renderCreateDropdown(){
    const existing = document.getElementById('createContentBtn');
    if(!existing) return;
    // se já substituído, não duplicar
    if(existing.dataset.dropdown === '1') return;
    // construir elemento dropdown
    const wrapper = document.createElement('div');
    wrapper.className = 'dropdown';
    const btn = document.createElement('button');
    btn.id = 'createContentBtnDropdown';
    btn.className = 'btn btn-link nav-link dropdown-toggle';
    btn.type = 'button';
    btn.setAttribute('data-bs-toggle','dropdown');
    btn.setAttribute('aria-expanded','false');
    btn.title = 'Criar conteúdo';
    btn.innerHTML = '<i class="bi bi-camera-reels" style="font-size:1.2rem; color:var(--youship-orange)"></i>';
    const menu = document.createElement('ul');
    menu.className = 'dropdown-menu dropdown-menu-end';
    menu.id = 'createContentDropdownMenu';

    // determinar labels e links de acordo com auth/channel
    const auth = localStorage.getItem('youshipAuth');
    let channelLabel = 'Criar canal';
    try{ const u = JSON.parse(localStorage.getItem('youshipUser')||'{}'); if(u && u.channel && u.channel.name) channelLabel = 'Acessar canal'; }catch(e){}

    const liUpload = document.createElement('li'); liUpload.innerHTML = `<a class="dropdown-item" href="#" id="ddUpload">Enviar vídeo</a>`;
    const liTransmit = document.createElement('li'); liTransmit.innerHTML = `<a class="dropdown-item" href="#" id="ddTransmit">Transmitir ao vivo</a>`;
    const liChannel = document.createElement('li'); liChannel.innerHTML = `<a class="dropdown-item" href="#" id="ddChannel">${channelLabel}</a>`;

    menu.appendChild(liUpload); menu.appendChild(liTransmit); menu.appendChild(liChannel);
    wrapper.appendChild(btn); wrapper.appendChild(menu);

    // substituir o link original pelo dropdown
    existing.parentNode.replaceChild(wrapper, existing);
    wrapper.dataset.replaced = '1';

    // handlers
    const ddUpload = document.getElementById('ddUpload');
    const ddTransmit = document.getElementById('ddTransmit');
    const ddChannel = document.getElementById('ddChannel');
    const fileInput = document.getElementById('fileUploadInput');

    ddUpload.addEventListener('click', (e)=>{
      e.preventDefault();
      const authNow = localStorage.getItem('youshipAuth');
      if(!authNow){ const go = confirm('Você precisa entrar para enviar vídeos. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)'); if(go) window.location.href = loginLink; else window.location.href = registerLink; return; }
      // trigger file input (ensure uploads helper loaded)
      if(!window.YouShipUploads){
        const script = document.createElement('script'); script.src = inHtml ? '../js/uploads.js' : 'js/uploads.js'; script.onload = ()=> fileInput.click(); script.onerror = ()=> alert('Não foi possível carregar o módulo de upload.'); document.head.appendChild(script);
      }else fileInput.click();
    });

    ddTransmit.addEventListener('click', (e)=>{
      e.preventDefault();
      const authNow = localStorage.getItem('youshipAuth');
      if(!authNow){ const go = confirm('Você precisa entrar para transmitir. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)'); if(go) window.location.href = loginLink; else window.location.href = registerLink; return; }
      // abrir página de configuração de transmissão
      const target = inHtml ? 'transmit-config.html' : 'html/transmit-config.html';
      window.location.href = target;
    });

    ddChannel.addEventListener('click', (e)=>{
      e.preventDefault();
      const authNow = localStorage.getItem('youshipAuth');
      if(!authNow){ const go = confirm('Você precisa entrar para criar/acessar canal. Deseja entrar agora? (OK = Entrar / Cancel = Criar conta)'); if(go) window.location.href = loginLink; else window.location.href = registerLink; return; }
      const target = inHtml ? 'channel.html' : 'html/channel.html';
      window.location.href = target;
    });
  }
  // renderizar dropdown após load
  setTimeout(renderCreateDropdown, 50);
  window.addEventListener('storage', (e)=>{ if(e.key==='youshipUser' || e.key==='youshipAuth') setTimeout(renderCreateDropdown, 50); });
  // marcar item ativo na sidebar/offcanvas com base em body[data-page] ou pathname
  function markActiveLinks(){
    const page = document.body && document.body.dataset && document.body.dataset.page ? document.body.dataset.page : '';
    const links = document.querySelectorAll('.nav.flex-column a.nav-link, .offcanvas-body .nav-link');
    links.forEach(a=>{
      try{
        const href = a.getAttribute('href');
        if(!href) return;
        const url = new URL(href, location.href);
        const target = url.pathname.split('/').pop(); // ex: ao-vivo.html
        // marcar ativo por data-page quando disponível
        if(page){
          if(target === `${page}.html` || (page==='home' && (target==='index.html' || url.pathname === '/' || target===''))){
            a.classList.add('active');
          }else{
            a.classList.remove('active');
          }
        }else{
          // fallback: comparar pathname
          if(url.pathname === location.pathname || url.pathname === location.pathname.replace(/\/$/, '') ) a.classList.add('active'); else a.classList.remove('active');
        }
      }catch(e){/* ignore bad urls */}
    });
  }
  // rodar uma vez após render
  setTimeout(markActiveLinks, 30);
  // também rodar ao carregar a página (útil se header.js for inserido antes do body ser ajustado)
  window.addEventListener('load', markActiveLinks);
  // observar mudanças simples (outros scripts podem alterar localStorage)
  window.addEventListener('storage', (e)=>{ if(e.key === 'youshipAuth' || e.key === 'youshipUser') renderUserMenu(); });

})();
