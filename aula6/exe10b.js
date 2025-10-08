// 1. Criar listas (arrays) vazias para guardar os dados.
let nomes = [];
let cidades = [];

// 2. Loop para cadastrar as 10 pessoas.
for (let i = 0; i < 10; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let cidade = prompt(`Digite a cidade de ${nome}:`);

    // Adiciona o nome e a cidade nas suas respectivas listas.
    nomes.push(nome);
    cidades.push(cidade);
}

alert("Cadastros finalizados! Agora vamos para a consulta.");

// 3. Loop para consultar as pessoas por índice.
while (true) {
    // Pede ao usuário um índice (de 0 a 9).
    let indice = prompt("Digite um índice de 0 a 9 para consultar (ou digite 'sair'):");

    // Se o usuário digitar 'sair', o loop para.
    if (indice === 'sair') {
        break; 
    }

    // Verifica se o índice existe na lista 'nomes'. 
    // Esta é uma forma simples de saber se o índice é válido (entre 0 e 9).
    if (nomes[indice] !== undefined) {
        // Se o índice existe, mostra os dados.
        alert(`Índice: ${indice}\nNome: ${nomes[indice]}\nCidade: ${cidades[indice]}`);
    } else {
        // Se não existe, avisa o usuário.
        alert("Índice inválido!");
    }
}