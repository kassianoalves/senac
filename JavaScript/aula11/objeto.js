/* O que são Objetos e Classes? 
Classes 
Uma classe é um modelo (ou molde) para criar objetos. Ela define os atributos e métodos que os objetos terão. 
 
Objetos 
Um objeto é uma instância de uma classe. Ele representa algo do mundo real e tem estado e comportamento. 
 
Exemplo: Um carro pode ser uma classe com atributos como cor, marca e velocidade e métodos como acelerar, frear e buzinar. 
*/
class Carro { 
    constructor(marca, modelo, cor) { 
        this.marca = marca; 
        this.modelo = modelo; 
        this.cor = cor; 
    } 
 
    acelerar() { 
        console.log('O carro ' + this.modelo + ' está acelerando...'); 
    } 
} 
 
// Criando um objeto a partir da classe 
let meuCarro = new Carro("Toyota", "Corolla", "Preto"); 
meuCarro.acelerar();
let seuCarro = new Carro('Fiat', 'Uno 98', 'Azul');
seuCarro.acelerar();