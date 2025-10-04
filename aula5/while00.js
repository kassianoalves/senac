let contador =1;
let vezes = prompt('numero de vezes');

while (contador <= vezes){
    document.write('<br>', vezes + ' x ' + contador + ' = ' + vezes*contador);
    contador++;
}