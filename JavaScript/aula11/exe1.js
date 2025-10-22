class Moto{

    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(){
        console.log(`Minha moto ${this.modelo} está linda!`)
    }
}
let minhaMoto = new Moto('Kawasaki', 'Z100', '2025');

minhaMoto.acelerar();