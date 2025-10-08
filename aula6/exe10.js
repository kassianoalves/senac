// ===================================================================
// PASSO 1: PREPARAÇÃO
// ===================================================================
// Documentação: Criamos dois arrays (listas) vazios. 
// 'nomes' guardará todos os nomes e 'cidades' guardará todas as cidades.
let nomes = [];
let cidades = [];
const totalPessoas = 10;

// ===================================================================
// PASSO 2: COLETA DE DADOS
// ===================================================================
// Documentação: Usamos um laço 'for' que executa 10 vezes (de i=0 até i=9).
// A cada volta, ele pede o nome e a cidade e os adiciona ao final dos seus respectivos arrays
// usando o método .push().
console.log("Iniciando o cadastro de pessoas...");
for (let i = 0; i < totalPessoas; i++) {
    // Pede o nome e garante que o usuário não deixe em branco
    let nome = prompt(`Digite o nome da pessoa ${i + 1}/${totalPessoas}:`);
    while (nome === null || nome.trim() === "") {
        nome = prompt(`Nome inválido. Por favor, digite o nome da pessoa ${i + 1}/${totalPessoas}:`);
    }

    // Pede a cidade e garante que o usuário não deixe em branco
    let cidade = prompt(`Digite a cidade de ${nome}:`);
    while (cidade === null || cidade.trim() === "") {
        cidade = prompt(`Cidade inválida. Por favor, digite a cidade de ${nome}:`);
    }

    // Adiciona as informações aos arrays
    nomes.push(nome);
    cidades.push(cidade);

    console.log(`Pessoa ${i + 1} (${nome}, ${cidade}) cadastrada com sucesso!`);
}

alert(`Cadastro das ${totalPessoas} pessoas concluído!`);
console.log("Cadastro finalizado. Pessoas registradas:", nomes);

// ===================================================================
// PASSO 3: CONSULTA DE DADOS
// ===================================================================
// Documentação: Criamos um loop infinito com 'while(true)' para permitir
// que o usuário faça quantas consultas quiser.
while (true) {
    // Pede ao usuário o índice que deseja consultar ou a opção para sair.
    let indiceInput = prompt("Digite o índice da pessoa que deseja consultar (de 0 a 9). Digite 'sair' para encerrar.");

    // Condição para sair do loop de consulta
    if (indiceInput.toLowerCase() === 'sair') {
        alert("Programa encerrado.");
        break; // O comando 'break' interrompe o loop.
    }

    // Converte o texto digitado para um número inteiro.
    let indice = parseInt(indiceInput);

    // Validação do índice:
    // 1. isNaN(indice) verifica se o que foi digitado não é um número.
    // 2. indice < 0 || indice >= totalPessoas verifica se o número está fora do intervalo válido (0 a 9).
    if (isNaN(indice) || indice < 0 || indice >= totalPessoas) {
        alert("Índice inválido! Por favor, digite um número entre 0 e 9.");
    } else {
        // Se o índice for válido, busca as informações nos arrays e as exibe.
        let nomeConsultado = nomes[indice];
        let cidadeConsultada = cidades[indice];
        alert(`Dados do índice ${indice}:\nNome: ${nomeConsultado}\nCidade: ${cidadeConsultada}`);
    }
}