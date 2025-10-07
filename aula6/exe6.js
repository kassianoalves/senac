let contador = 1;
let numero = parseInt(prompt('Informe o número'))

while(contador<=10){
    document.write(numero + ' x '+contador+' = '+ numero*contador+'<br>');
    contador++;
}

document.write('<p>');
//Pedindo o numero de vezes a exibir pelo usuario
let ctd = 1;
let num = parseInt(prompt('Informe o número para o segundo script'));
let final = parseInt(prompt('Informe o numero de vezes'));
while(ctd <= final){
    document.write(num + ' x ' +ctd+ ' = ' + num*ctd + '<br>');
    ctd++;
}