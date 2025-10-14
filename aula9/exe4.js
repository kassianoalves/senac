/*Exercício 4 – Número Aleatório Dentro de um Intervalo 
📜 Enunciado: Crie um programa que solicita ao usuário dois números (mínimo e máximo) e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela. */

let max = parseInt(prompt('N1:'));
let min = parseInt(prompt('N2:'));
let valor = Math.floor(Math.random()*(max-min +1))+min;
console.log(valor) 
