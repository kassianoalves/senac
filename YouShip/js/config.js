// js/config.js - configuração global do site YouShip (edite aqui)
// Valores simples que controlam título do site, banner, ícone e destaque.
window.YouShipConfig = window.YouShipConfig || {
  siteTitle: 'YouShip',
  // brandSVG can be replaced with inline SVG string or kept null to use default
  brandSVG: null,
  // banner HTML (injetado no header bannerArea se desejado)
  bannerHtml: '<div class="d-flex justify-content-between align-items-center"><div><strong>Espaço de banner/ anúncio</strong><div class="small">Coloque aqui campanhas, promoções ou anúncios.</div></div><div><a href="#" class="btn btn-sm btn-light text-dark">Saber mais</a></div></div>',
  // featured video id (coloque o id de um vídeo para destaque, deixe null para nenhum)
  featuredVideoId: null,
  // link para logotipo/icone pequeno (usado se brandSVG for null)
  brandIcon: null
};
