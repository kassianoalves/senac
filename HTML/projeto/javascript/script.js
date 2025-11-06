function selecionarPersonagem(id) {
  const p = personagens[id]; // usa o objeto que já criamos antes

  // troca imagem grande
  document.getElementById("img-grande").src = "img/" + id + ".jpg";
  document.getElementById("img-grande").alt = p.nome;

  // troca informações
  document.getElementById("nome").textContent = p.nome;
  document.getElementById("estilo").textContent = "Estilo de luta: " + p.estilo;
  document.getElementById("caracteristicas").textContent = "Características: " + p.caracteristicas;
  document.getElementById("localizacao").textContent = "Localização: " + p.localizacao;
  document.getElementById("frase").textContent = p.frase;

  // reaplica animação
  const img = document.getElementById("img-grande");
  img.style.animation = "none";
  void img.offsetHeight; // força reflow
  img.style.animation = "aparecer 0.8s ease-in-out";
}
function endGame(winner) {
  alert("Vitória de " + winner + "!");

  // Se o vencedor for o jogador atual
  if (winner === playerName) {
    // Recupera ranking salvo
    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    // Procura se já existe o jogador
    let existing = ranking.find(r => r.name === playerName);

    if (existing) {
      existing.victories += 1; // soma mais uma vitória
    } else {
      ranking.push({ name: playerName, victories: 1 }); // cria novo jogador
    }

    // Salva novamente
    localStorage.setItem("ranking", JSON.stringify(ranking));
  }

  // Resetar HP para nova partida
  kyo.hp = 100;
  iori.hp = 100;
  updateHP();
}
