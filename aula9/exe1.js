//Exercício 1 – Sorteio de Números 
//📜 Enunciado:Crie um programa que sorteia um número entre 1 e 100. Se for par, exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar".
let num;

    num= Math.floor(Math.random()*100)+1;
    if((num%2)==0){
        console.log(num+' Par');}
        else {
           
        console.log(num+' Impar')
    }
