//2. Peça ao usuário para digitar três números e armazene-os em um vetor. Depois, exiba o maior número.
let num =[];
let valor;
for(let i =0; i<3; i++){
   valor = Number(prompt('Numero:'+i));
    num.push(valor); // puxa o dado de nome para acrescentar em numero.
    
}
console.log(Math.max(num[0], num[1], num[2]));

//-----OutraForma-------
let maior=0;
for (let i=0; i<3; i++){
    if(num[i] > maior){
       maior = num[i];
    }
}

console.log(maior);