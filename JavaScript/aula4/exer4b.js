let idade = Number(prompt('Qual sua idade?'))
let text = (idade <= 11) ? 'Criança' : (idade <= 17 )? 'Adolescente' : (idade < 64)? 'Adulto': 'Idoso';


console.log(text)

