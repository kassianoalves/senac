// Media de Aluno para aprovação

let nota1 = Number(prompt('Nota 1: '));
let nota2 = Number(prompt('Nota 2: '));

let med = (nota1 + nota2) /2;

if(med >= 6){
    alert('Aprovado');
}
else {
    alert('Reprovado');
}