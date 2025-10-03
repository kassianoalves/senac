let idade = Number(prompt('Qual sua idade?'))
let mensagem = ['Oi Criança', 'Oi Adolescente ', 'Oi Adulto', 'Oi idoso'];
if (idade < 11){
    alert(`${mensagem[0]}`);
} else if (idade <= 17 ){
    alert(`${mensagem[1]}`);
}
else if (idade <= 64){
    alert(`${mensagem[2]}`);
} 
else (alert(`${mensagem[3]}`));



