// Verificar se numero é par ou impar

let valor = Number(prompt('Defina um valor: '))
let cal = valor % 2;

if(cal == 0){
    alert('Par')
} 
else{
    alert('Impar')
}