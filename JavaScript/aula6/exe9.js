let contMulher = 0;
let contHomem = 0;
let somaM = 0;
let somaF = 0;
let continua = 's';

while (continua !== "n") {
    
  let salario = parseInt(prompt("Qual o seu salário?"));
  let sexo = prompt("Qual o seu sexo? (M/F)");
  
  if (sexo == "F") {
      somaF += salario;
    } else if (sexo == "M") {
      somaM += salario;
    } else {
      alert("Sexo inválido");
    }
  switch (sexo) {
    case "F":
      contMulher++; break;
    case "M":
      contHomem++; break;
    default:
      alert("Sexo inválido"); break;
     } 

     continua = prompt('Deseja permanecer? <s/n>');
     if (continua =='n'){alert('Obrigado, thcau!');}
}
  
            

document.write("Mulheres: " + contMulher);
document.write("<br>Homens: " + contHomem);
document.write("<br>Salário Homens " + somaM);
document.write("<br>Salário Mulheres " + somaF);