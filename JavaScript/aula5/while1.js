/* Ler 2 números até o usuário informar que deseja sair do programa.
*/

let continua = 's';
let num1, num2;
let operacao;

while (continua == 's' || continua == 'sim') {
    num1 = parseInt(prompt('Numero 1: '));
    num2 = parseInt(prompt('Numero 2: '));
    operacao = prompt('operacao <+,-,*,/>');

    if (operacao =='+') {
        alert('Resultado '+ (num1 + num2));}
        else if (operacao == '-'){
            alert('Resultado '+ (num1 - num2));}
        
        else if (operacao == '*'){
            alert('Resultado '+ (num1 * num2));}
        
        else if (operacao == '/'){
            alert('Resultado '+ (num1 / num2));}
        
        else {alert('Operacao inválida')}
    continua = prompt('Deseja permanecer? <s/n>');

}
alert('Obrigado, thcau!');