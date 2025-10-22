//Verificar se número é par ou ímpar e repetir até digitar zero 
//Descrição: Peça ao usuário para digitar um número. Informe se ele é par ou ímpar. O programa deve continuar solicitando novos números até que ele digite zero. 

let numero=Number(prompt('Informe um numero:'))
while(numero != 0){
    if((numero%2) == 0){
        alert(`Numero ${numero} par!`)
    } else{ 
        alert('Numero impar');}
    numero=parseInt(prompt("Digite outro numero: <para sair, digite 0")); 
}

