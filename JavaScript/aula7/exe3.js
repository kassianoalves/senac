// receber 5 precos de produtos e informar o mais caro
// quando quero saber se alguma coisa é maior que a outra, eu declaro uma val de menor valor, caso seja o inverso, eu declaro uma val com o maior valor possível.
let preco; maiorPreco=0;
for(i=0; i<=5; i++){
    preco = prompt('Informe um preco')
    if(maiorPreco < preco){
        maiorPreco = preco;
    }
}
document.write('Maior preco ', maiorPreco);