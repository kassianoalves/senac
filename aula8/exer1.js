//Crie uma função chamada cumprimentar(nome), que recebe um nome via prompt como parâmetro e exibe a mensagem "Olá, [nome], tudo bem?". 

function cumprimentar(){
    let nome = prompt('Diga seu nome:');
    alert('Olá '+ nome);
}

cumprimentar();

//------------- OU TAMBÉM-----------

function cumprimentar2(nome){
    alert('Olá '+ nome+ ". Boa noite!");
}

let nome = prompt('Informe o nome')
cumprimentar2(nome);

//------------ OU -----------------
cumprimentar2(prompt('Seu nome:'))