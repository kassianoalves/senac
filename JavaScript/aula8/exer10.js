//10 - Crie uma função chamada contarImpares(n), que recebe um número inteiro positivo e retorna quantos números ímpares existem de 1 até N. 
function contarImpares(n){
 qtdImpar = 0
 for (let i=0; i<= n; i++){
    if ((i%2) != 0){
        qtdImpar++;
    }
 }  return qtdImpar; 
}
let numero = parseInt(prompt('Numero'));
let qtd = contarImpares(numero);
alert('Quantidade de impares: '+ qtd)