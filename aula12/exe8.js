//    Peça ao usuário 3 nomes. Depois, exiba um nome aleatório entre os três. 
let nomes=[]
for(let i=0; i<3; i++){
    nomes.push(prompt('Nome:'));
}
let sorteado =Math.floor(Math.random()*3);
console.log('Nome sorteado '+nomes[sorteado])