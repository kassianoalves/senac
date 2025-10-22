let num1 = Number(prompt('N: 1'))
let num2 = Number(prompt('N: 2'))
let operacao = Number(prompt('0 = menos, 1 = mais , 2 = multiplicação, 3 = divisao'))
switch(operacao){
    case 0:
        document.write(num1 - num2); break;
    case 1:
        document.write(num1 + num2); break;
    case 2:
        document.write(num1 * num2); break;
    case 3:
        document.write(num1 / num2); break;
    default:
    alert(operacao); break;
}