/*Crie uma classe Produto com os atributos: 

    nome (Nome do produto) 

    preco (Preço do produto) 

    estoque (Quantidade disponível em estoque) 

Adicione os seguintes métodos: 

    vender(quantidade): Reduz a quantidade do estoque, se houver disponibilidade. 

    reporEstoque(quantidade): Aumenta a quantidade do estoque. 

    exibirInfo(): Exibe as informações do produto.  
---------------------------------------- */

meuStorage = localStorage; // chamei um localStorage

//localStorage.setItem("Farinha", 'Doce');

class Produto {
    constructor (nome, preco, estoque){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    };

    vender(quantidade){
        if(this.estoque >= quantidade){
            this.estoque -= quantidade;
        } else {
            console.log('Quantidade indisponível no momento');
        };
    };

    reporEstoque(quantidade){
        this.estoque += quantidade
        console.log(`Estoque aumentou + ${quantidade}. Total: ${this.estoque}`);
    };

    exibirInfo(){
        console.log(`Produto: ${this.nome} | Preço: ${this.preco} | Estoque: ${this.estoque}`);
    };
};

let compras = new Produto("Açucar", 3, 2)
localStorage.setItem("Objeto", JSON.stringify(compras)); // passou os valores para strings usando json. Eu seto os itens do objeto "Objeto" compras dentro dele.

compras.vender(1)
compras.reporEstoque(20,)
compras.exibirInfo()