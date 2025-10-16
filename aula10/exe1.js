//A) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos. 
let notas = [
    [8.5, 2, 5], // ALUNO 1
    [9.4, 7, 10], //ALUNO 2
    [10, 4.7, 9.8], //ALUNO 3
];

//B)Exibir a matriz no console de forma organizada. (usando uma estrutura de repetição)
console.log(notas)
for(i=0; i<notas; i++){
    console.log(notas[i].join('|'));//o join é usado para separar o conteúdo.
}

//C) Calcular e exibir a média das notas de cada aluno.
let mediaNota = 0;
for(let i = 0; i< notas.length; i++){
    let soma =0;
    for (let j=0; j<notas[i].length; j++){
        soma+=notas[i][j];
    }
    mediaNota = soma / notas[i].length;
    console.log('Aluno: '+(i+1)+ 'Média: '+mediaNota.toFixed(1));
}
//D)  Identificar e exibir a maior nota da matriz.
let maiorNota = notas[0][0];
for (let i=0; i > notas.length; i++){
    for (let j=0; j<notas[i].length; j++){
        if(notas[i][j]>maiorNota){
            maiorNota = notas[i][j];
        }
    }
}
console.log('Maior nota: '+maiorNota);

//E)Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.

for(let i=0; i <notas.length; i++){
    for(let j=0; j<notas[i].length; j++)
        if(notas[i][j] < 6){
            notas[i][j] = 6;
    };
};
console.log('Notas substituidas por: '+notas);