// Usando o For e fazendo verificacao do dado inserido
let numero, soma=0;
let testar;

for (let i=0; i<5; i++){
    testar = prompt('Digite um valor')
    if (testar !='') numero = parseInt(testar);// Se testar for diferente de nada, ele converte o que está na variavel testar em parseInt e aloca em numero.
    else numero = 0; // caso o usuario digite nada, ele troca por zero.
    soma = soma + numero;
}
document.write(soma)



