//Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). 
//Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação.
let num1 = parseInt(prompt('Numero: '));
let num2 = parseInt(prompt('Numero: '));
let soma = somar(num1,num2); alert(soma);
let subi = sub(num1,num2); alert(subi);
let divi = div(num1,num2); alert(divi);
let mult = multi(num1,num2); alert(mult)

function somar(a,b){
  return a + b;
};

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b
}

function multi(a,b){
    return a*b;
}

