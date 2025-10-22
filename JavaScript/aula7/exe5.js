//Pedir nome e idade de 5 pessoas, mostrar quem é o mais velho 
//Descrição: Solicite nome e idade de 5 pessoas e exiba o nome do mais velho
let nome; idade=0; idadeMaior=0; maisVelho=0;

for(i=0;i<5; i++){
    nome=prompt('Nome:');
    idade=prompt('Idade:')
    if(idadeMaior > idade){
        idadeMaior = idade;
    }
}
if (idadeMaior < idade){
    idadeMaior = idade; maisVelho = nome;
}    

document.write("Nome: "+ maisVelho+ '\nIdade: '+ idadeMaior)