//6 - Crie uma Função que Informa o Mês pelo Número e retorna o mês por escrito 
let mes = Number(prompt('0 = Jan, 1 = Fev , 2 = Mar, 3 = Abr, 4 = Mai, 5 = Jun, 6 = Jul, 7 = Ago, 8 = Set, 9 = Out, 10 = Nov, 11 = Dez'));

function data(x){
    switch(x){
        case 0:
            alert('Janeiro'); break;
        case 1:
            alert('Fevereiro'); break;
        case 2:
            alert('Março'); break;
        case 3:
            alert('Abril'); break;
        case 4:
            alert('Maio'); break;
        case 5:
            alert('Junho'); break;
        case 6:
            alert('Julho'); break;
        case 7:
            alert('Agosto'); break;
        case 8:
            alert('Setembro'); break;
        case 9:
            alert('Outubro'); break;
        case 10:
            alert('Novembro'); break;
        case 11:
            alert('Dezembro'); break;
        default:
        alert(x); break;
    }
}
data(mes)