class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    dados(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`);
    }

}
let usuario = new Pessoa('Ana', '25', 'Enfermeira');
usuario.dados()