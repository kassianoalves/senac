
/*Atributos: São as propriedades de um objeto, ou seja, suas características. 
 
Métodos 
São funções dentro da classe que definem o comportamento do objeto.

3. O conceito de Encapsulamento 
O encapsulamento é um princípio da POO que restringe o acesso direto a alguns atributos e métodos de um objeto, 
protegendo-os de modificações externas. Isso é feito através de modificadores de acesso: 
🔹 public → Atributos acessíveis de qualquer lugar. 
🔹 private (# em JavaScript) → Atributos acessíveis apenas dentro da própria classe. 
*/
class ContaBancaria {  // criou uma classe

    #saldo;  // Atributo privado utilizando o #

      

    constructor(titular_ct, saldo_ct) {  // método inicial

        this.titular = titular_ct; // Atributo público  não utilizando o #

        this.#saldo = saldo_ct;  // Atributo privado  utilizando o #

    }  

    depositar(valor) {  // método criado a partir das 

        this.#saldo += valor;  

        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.#saldo}`);  

    }  

    consultarSaldo() {  

        console.log(`Saldo de ${this.titular}: R$ ${this.#saldo}`);  

    } 

    debitar(valor) { 

        if (valor>this.#saldo){ 

            console.log('Não há saldo para este débito'); 

        } else { 

            this.#saldo -= valor; 

            this.consultarSaldo(); 

        } 

    } 

}  

  

// Criando uma conta  

let conta = new ContaBancaria("Ana", 1000);  // criou uma conta usando new e chamando a classe. colocou os atributos da novo conta 

  

// ✅ Acesso permitido (público)  

console.log(conta.titular); // "Ana"  chamou a variavel conta com o os atributos adicionados em titular.

conta.consultarSaldo();  

conta.debitar(500) 

conta.consultarSaldo(); 