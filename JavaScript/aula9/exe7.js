//3. Crie um vetor com cinco números aleatórios de 1 a 50 e exiba apenas os números pares.
 

let numeros = [];  

let numero; 

for (let i = 0; i < 5; i++) {  

    numero = parseInt(prompt("Digite um número entre 1 e 50:"));  

    // Verificando se o número está no intervalo correto  

    if (numero >= 1 && numero <= 50) {  

        numeros.push(numero);  

    } else {  

        console.log("Número inválido. Tente novamente.");  

        i--; // Decrementa o índice para tentar novamente  

    }  

}  

// Exibindo apenas os números pares  

for (let i = 0; i < numeros.length; i++) {  

    if (numeros[i] % 2 === 0) {  

        console.log(numeros[i]);  

    }  

} 