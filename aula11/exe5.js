class Personagem{
    constructor(nome, energia, nivel){
        this.nome = nome;
        this.energia = energia;
        this.nivel = nivel;
    }
    upEnergia(atbEnergia){ // o que fica dentro do () é um parâmetro que depois será chamado para manipular o valor passado.
        this.energia +=atbEnergia;
        if(this.energia > 100){
            document.write('Sua energia está no máxmimo: '+' Total: ' +(this.energia = 100 +'<br>'))
        } else {
            document.write('Voce ganhou mais '+atbEnergia +' de energia.' +' Total: '+this.energia+atbEnergia +'<br>');
        }
    }

    downEnergia(atbEnergia){
        if(atbEnergia > this.energia){
            this.energia = 0;
            document.write('Sua energia foi zerada <br>');
        } else{
            this.energia -= atbEnergia
            document.write('Você perdeu '+ atbEnergia + ' de energia.' + ' Total: '+this.energia +'<br>')
        }

    }

    upLeve(exp){
        document.write('Parabéns, você subiu de nível: ' +this.nivel)
        this.nivel += exp;
        document.write('>>>' +this.nivel+'<br>')

    }

    consultarAtrib(){
        document.write(` Nome: ${this.nome} | Energia: ${this.energia} | Nível: ${this.energia} | Level: ${this.nivel}`)
    }
}
let person1 = new Personagem("Sarah", 100, 1) 

 

person1.consultarAtrib(); 

person1.aumentarEnergia(10); 

person1.subirNivel(1); 

person1.consultarAtrib(); 

person1.perderEnergia(50) 

person1.subirNivel(1) 

person1.consultarAtrib() 