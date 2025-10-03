// Programa que ler salario do funcionario

let salario = Number(prompt('Salario: '))
let vale = salario * 6/100;

if (salario >=2500){
    inss1 = salario * (11 / 100)
        document.write('Voce paga 11% de INSS: R$'+(salario - inss1));
        document.write('<br>Desconto de: R$'+inss1);
}        
else if(salario < 2499){
    inss2 = salario * (8 / 100)
    document.write('Voce paga 8% de INSS: R$'+(salario - inss2));
    document.write('<br>Desconto de: R$'+inss2);
}        
document.write('<br>Seu deconto de VT: R$'+vale)