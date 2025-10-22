// Pedi pra criar uma forma de acrescentar diferentes personagens e atributos. FOi usado array para armazenar.
//Este exemplo mostra a instanciação de vários objetos da classe pessoa, armazenando dentro de um array 

 

class Pessoa { 

    constructor(nome, idade) { 

      this.nome = nome; 

      this.idade = idade; 

    } 

   

    escreverPessoa() { 

      document.write(this.nome + ' ' + this.idade); 

    } 

  } 

   

  const pessoas = []; 

   

  while (true) { 

    const nome = prompt("Digite o nome (ou 'sair' para encerrar):"); 

    if (!nome || nome.toLowerCase() === "sair") { 

      break; 

    } 

   

    const idade = prompt("Digite a idade:"); 

    if (!idade) { 

      alert("Idade inválida, tente novamente."); 

      continue; 

    } 

   

    let pessoa = new Pessoa(nome, idade); 

    pessoas.push(pessoa); 

  } 

   

  console.log("Pessoas cadastradas:"); 

 

  let i = 0; 

while (i < pessoas.length) { 

    pessoas[i].escreverPessoa(); 

    document.write('<br>'); // Para pular linha 

     

  i++; 

} 