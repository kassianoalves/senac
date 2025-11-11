// header.js - injeta um cabeçalho/offcanvas/banner reutilizável
// Este script deve ser incluído antes de `js/app.js` nas páginas.
(function(){
  // calcular se estamos dentro da pasta /html/
  const inHtml = location.pathname.indexOf('/html/') !== -1;
  // links dependem se estamos dentro de /html/ (para evitar duplicar 'html/html/...')
  const homeLink = inHtml ? '../index.html' : 'index.html';
  const aoLink = inHtml ? 'ao-vivo.html' : 'html/ao-vivo.html';
  const louvorLink = inHtml ? 'louvor.html' : 'html/louvor.html';
  const podcastLink = inHtml ? 'podcast.html' : 'html/podcast.html';
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
            <path d="M9 8l6 4-6 4V8z" fill="#fff" />
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
              <a class="nav-link" href="#" title="Criar conteúdo"><i class="bi bi-camera-reels" style="font-size:1.2rem; color:var(--youship-orange)"></i></a>
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
          <hr>
        </nav>
      </div>
    </div>

    <!-- Banner -->
    <div class="container-fluid mt-3"><div class="row"><div class="col-12"><div id="bannerArea" class="p-3 mb-3 rounded-3 text-white" style="background:linear-gradient(90deg,var(--youship-orange),#ff944d)"><div class="d-flex justify-content-between align-items-center"><div><strong>Espaço de banner/ anúncio</strong><div class="small">Coloque aqui campanhas, promoções ou anúncios.</div></div><div><a href="#" class="btn btn-sm btn-light text-dark">Saber mais</a></div></div></div></div></div>
  `;

  document.body.insertBefore(container, document.body.firstChild);

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
      // logado: mostrar perfil e sair
      const userRaw = localStorage.getItem('youshipUser');
      let name = auth;
      try{ const u = JSON.parse(userRaw); if(u && u.name) name = u.name; }catch(e){}
      const li1 = document.createElement('li');
      li1.innerHTML = `<a class="dropdown-item" href="${perfilHref}">Olá, ${name}</a>`;
      const li2 = document.createElement('li');
      li2.innerHTML = `<a class="dropdown-item" href="#" id="logoutBtn">Sair</a>`;
      menu.appendChild(li1);
      menu.appendChild(li2);
      // logout
      setTimeout(()=>{
        const lb = document.getElementById('logoutBtn');
        if(lb) lb.addEventListener('click', (e)=>{ e.preventDefault(); localStorage.removeItem('youshipAuth'); location.reload(); });
      }, 50);
    }
  }

  // render no load
  renderUserMenu();
  // observar mudanças simples (outros scripts podem alterar localStorage)
  window.addEventListener('storage', (e)=>{ if(e.key === 'youshipAuth' || e.key === 'youshipUser') renderUserMenu(); });

})();
