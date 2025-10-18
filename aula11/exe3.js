class Produto{
    constructor(nome, preco, qtd){
        this.nome = nome;
        this.preco = preco;
        this.qtd = qtd;
    }
    mercado(){
        console.log(`Estoque ${prod_nome} | ${this.preco} | ${this.qtd}`);
    }
}
let prod_nome = prompt('Diga um nome do produto')
let mercadinho = new Produto(prod_nome, "35,00", "10");

mercadinho.mercado()