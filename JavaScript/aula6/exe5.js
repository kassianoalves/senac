// Solicitar um nome e o numero de vezes que deseja exibi-lo.
let nome = prompt('Diga nome')
let vezes=Number(prompt('Numero de vezes'));
let i=0;
while(i <=vezes){
    document.write('<br>',nome)
    i++
}