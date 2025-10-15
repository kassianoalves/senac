//Crie um programa que receba os nomes de 10 alunos e suas notas em um vetor. 
//Depois, exiba a média da turma." Ao término, exiba também para cada aluno a sua nota.

//vetores de armazenamento
let aluno = [];
let notas = [];

//recebendo os nomes e as notas do alunos e guardando (push) dentro dos vetores.
for(let i=0; i<10; i++){
    aluno.push(prompt('Digite o nome do aluno'+ (i+1)+':')); // o prompt já coloca a valor dentro da variavel usando o push, sem precisar declarar novas variavel pra isso.
    notas.push(parseFloat(prompt('Digre a nota do aluno '+ aluno[i]+':')));
}

//Calculando a media da turma
let somaNotas = 0;
for(let i = 0; i< notas.length; i++){
    somaNotas = somaNotas + notas[i]; //soma notas e coloca dentro da nova variavel.
}
let mediaTurma = somaNotas / notas.length;

//Exibindo a media da turma - toFixed arredondando pra (2 - casas)
console.log('A media da turma é: '+ mediaTurma.toFixed(2));

//Exibindo a nota de cada aluno.
for(let i=0; i<aluno.length; i++){
console.log(aluno[i]+ ' : '+ notas[i]); }