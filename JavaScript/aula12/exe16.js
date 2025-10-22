//    Crie uma classe Livro com os atributos titulo, autor e ano. Crie 2 objetos e exiba suas informações. 
class livro{
    constructor (titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    exibir(){
        console.log(`Livro: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`)
    }
}
let livro1 = new livro('Bíblia', 'Deus', '00');
let livro2 = new livro('Romanos', 'Paulo', '66');

livro1.exibir();
livro2.exibir();