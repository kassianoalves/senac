// idade de eleitor
// menor 16 não pode votar
// 16, 17 eleitor opcional
// 18 eleitor obritatório

let idade = Number(prompt('Informe a idade'));
if (idade<16){
    console.log('Não pode votar');
} else if (idade<18){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}