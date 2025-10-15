//5. Crie um vetor com os dias da semana e peça para o usuário informar um número (1 a 7). Exiba o nome do dia correspondente.
let semana = ['Domingo', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
let numero = prompt('Digite um numero de 1 a 7 para semana.');

if (numero >= 1 && numero <= 7){
    console.log('O dia correspondente é: '+semana[numero -1])}
    else {
        console.log('Dia inválido!')
    }
