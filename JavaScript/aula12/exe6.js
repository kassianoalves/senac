//    Faça um programa que simula a roleta da sorte: sorteia um número entre 0 e 9 e exibe um prêmio diferente para cada número (use array). 

let premios = ['Nada', 'Tv', 'Bicicleta', 'Café', 'Viagem', 'Celular', 'Fone', 'Xadrez', 'Notebook', 'Caneca']; 

let numero = Math.floor(Math.random() * 10); 

console.log("Número sorteado: " + numero); 

console.log("Prêmio: " + premios[numero]); 