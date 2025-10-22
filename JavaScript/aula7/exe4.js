// Ler 10 números e mostrar a média 
//Descrição: Solicite 10 números e mostre a média deles ao final. 

let numero, media=0;

for(i=0; i<5; i++){
    numero = parseInt(prompt('Digt sua nota:\n'))
    document.write('<br> Nota:', numero);
    media+=numero;
}
document.write('<br>Media total: '+ (media/5));