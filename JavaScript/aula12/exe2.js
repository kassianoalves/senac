// 4 números no array e calculo da média 

let numeros = []; 

let soma = 0; 

for (let i=0; i < 4; i++){ 

    let n = Number(prompt('Digite o número')); 

    numeros.push(n); 

    soma = soma + n; 

} 

let media = soma/numeros.length; 

console.log('A média é: ' + media); 

console.log('O conteúdo do array: ' + numeros); 