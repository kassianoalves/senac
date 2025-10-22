//    Peça ao usuário 5 palavras e armazene em um array. Depois, exiba apenas as palavras com mais de 5 letras. 
palavras = [] 

 

for (i=1; i<6; i++) { 

    palavras.push(prompt('Digite a ' + i + 'ª palavra: ')) 

} 

 

document.write('Essas são as palavras com mais de 5 letras: <br>') 

 

for (i=0; i < palavras.length; i++) { 

    if (palavras[i].length > 5) { 

        document.write(palavras[i] + ': Tem ' + palavras[i].length + ' letras.<br>') 

    } 

} 