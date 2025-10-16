/*2) Criando um Jogo Simples 
O recrutador pediu para desenvolver um Jogo da Batalha Naval (versão simplificada). 

Descrição da Atividade: 

    Criar uma matriz 5x5 que representa o oceano. 

    Um navio estará posicionado em uma coordenada aleatória. (faça primeiro com uma escolha sua, depois implemente para usar um valor randômico) 

    O jogador deve tentar acertar o navio, informando uma linha e uma coluna. 

    O programa informa se o tiro acertou ou errou. */

    let oceano = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],

    ];
    let linha  = Math.floor(Math.random()*5); 
    let coluna = Math.floor(Math.random()*5); 
    oceano[linha][coluna] = 1;

    let vida = 5; 
while (vida > 0) { 
    let linha = parseInt(prompt("Informe a linha (0 a 4): ")); 
    let coluna = parseInt(prompt("Informe a coluna (0 a 4): ")); 
    if (oceano[linha][coluna] === 1) { 
        alert("Parabéns, você acerto") 
        break; 
    } else { 
        vida --; 
        if (vida == 0) { 
            alert("Game over"); 
            break; 
        } 
        alert("Você errou!! - Faltam "+vida+" vidas") 
    }   
    
}