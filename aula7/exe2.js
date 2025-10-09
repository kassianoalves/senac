//Receber 10 idades e informar quantas são maiores de idade 
//Descrição: Receba a idade de 10 pessoas e diga quantas são maiores de idade (18+). 

let idade;
let somaIdade=0;
for(let i=1; i<=10; i++){
    idade = prompt('Qual sua idade');
 if(idade>=18){
    somaIdade++;
 }   
}
document.write(`Existem ${somaIdade} maiores de idade`);
document.write('Existem' +Math.abs(somaIdade-10)+ 'maiores de idade');