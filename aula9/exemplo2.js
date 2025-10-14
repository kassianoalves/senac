let frutas =[];
let nome;

for(let i =0; i<5; i++){
    nome = prompt('Fruta:')
    frutas.push(nome); // puxa o dado de nome para acrescentar em fruta.
}
frutas.pop()// remove a ultima fruta adicionada. 
frutas.sort(frutas)// ordena em ordem alfabetica
console.log(frutas);
let copia = [...frutas]// faz uma copia do array
copia.sort(); // ordenar o array
console.log(copia);
console.log('O tamanho do array' +frutas.length);// mostrar tamanho da array

for(let i=0; i<=5; i++){
    console.log(frutas[i]); // enquanto i for menor ou igual ao tamanho do array (indice), mostre.
}