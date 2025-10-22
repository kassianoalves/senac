class Filme {
    constructor(titulo, diretor, ano){
    this.titulo = titulo;
    this.diretor = diretor;
    this.ano = ano;
    };

    estreia(){
        console.log(`O filme ${this.titulo} do direto ${this.diretor} é de ${this.ano}.`)
    }
} 

let bilheteria = new Filme('Tranformers - A Era da Extinção', 'Michael Bay', '2014');
bilheteria.estreia()