//    Crie um array com nomes de 6 países. Peça ao usuário um número de 1 a 6 e exiba o país correspondente. Se for inválido, mostre mensagem. 
let paises=['Brasil','Portugal', 'Angola', 'Argentina','Chile', 'Israel'];
let num =Number(prompt('Informe um numero de 1 a 6'))//precisarei diminuir o indice por 1, pois ele puxará do zero.

if(num>=1 && num<=6){
    console.log('País escolhido '+paises[num-1]);}
else {
    console.log('Erro: Número inválido');
}