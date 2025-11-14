// Header with promotion and navigation
function createHeader() {
    return `
        <!-- Hero/Promotion Section -->
        <section class="text-white py-5 position-relative">
            <div class="position-absolute top-0 start-0 p-3">
                <a class="text-white" href="index.html">Loja Bonés & Tênis</a>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8">
                        <h1 class="display-4 fw-bold">PROMOÇÃO ESPECIAL!</h1>
                        <p class="lead">Boné + Tênis com 30% de desconto. Aproveite essa oferta limitada!</p>
                        <a href="catalogo.html" class="btn btn-warning btn-lg">Ver Oferta</a>
                    </div>
                    <div class="col-lg-4">
                        <img src="../image/promocao.jpg" alt="Promoção" class="img-fluid rounded" onerror="this.src='https://via.placeholder.com/400x300?text=PROMOÇÃO'">
                    </div>
                </div>
            </div>
        </section>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a href="index.html">Loja Bonés & Tênis</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Início</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="catalogoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Catálogo
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="catalogoDropdown">
                                <li><a class="dropdown-item" id="dropdown-bones" href="catalogo.html#bones" tabindex="0">Boné</a></li>
                                <li><a class="dropdown-item" id="dropdown-tenis" href="catalogo.html#tenis" tabindex="0">Tênis</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="outlet.html">Outlet</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="quem-somos.html">Quem Somos</a>
                        </li>
                    </ul>

                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" title="Carrinho de Compras">
                            <i class="fas fa-shopping-cart"></i> Carrinho (0)
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Conta
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="login.html">Login</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

// Function to insert header into page
function insertHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = createHeader();
    document.body.insertBefore(headerContainer, document.body.firstChild);
}

// Call insertHeader when DOM is loaded
document.addEventListener('DOMContentLoaded', insertHeader);
