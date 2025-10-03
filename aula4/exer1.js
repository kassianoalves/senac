let day = Number(prompt('Dia:'));
if(day == text){
    alert('só numero');
}
switch(day){
    case 1:
        document.write('Domingo'); break;
    case 2:
        document.write('Segunda'); break; 
    case 3:
        document.write('Terça'); break;
    case 4:
        document.write('Quarta'); break;
    case 5:
        document.write('Quinta'); break;
    case 6:
        document.write('Sexta'); break;
    case 7:
        document.write('Sabado'); break;
    default: alert('Apenas numeros de 1 a 7'); break;
}