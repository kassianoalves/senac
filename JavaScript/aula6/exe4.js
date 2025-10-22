// Usando o For
let numero, soma=0;

for (let i=0; i<5; i++){
    numero = parseInt(prompt('Digite um numero'));
    soma = soma + numero;
}
document.write('for ', soma)

// Usando o While

let numero1, sum = 0, cont = 0;
while(cont<5){
    num = parseInt(prompt('Digite um valor'))
    sum += num;
    cont++;
}
document.write('<br> While ',sum)


