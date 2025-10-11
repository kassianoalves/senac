//Crie uma função chamada verificarIdade(idade), 
//que recebe a idade de uma pessoa e retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário. 

function verificarIdade(idade){
    let mensagem;

    if(idade>=18){
        
        mensagem = "Maior de idade"; }
        else {
            mensagem = "Menor de idade"; }
    return mensagem; 
}

idade = parseInt(prompt('Informe a idade: '));
let texto = verificarIdade(idade);
alert(texto);
