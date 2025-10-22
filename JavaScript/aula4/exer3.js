let mes1 = Number(prompt('Escolha o mês de 1 a 12:'))
let mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
switch (mes1) {
    case 1:
        alert(`${mes[1]}`); break;
    case 2:
        alert(`${mes[2]}`); break;
    case 3:
        alert(`${mes[3]}`); break;
    case 4:
        alert(`${mes[4]}`); break;
    case 5:
        alert(`${mes[5]}`); break;
    case 6:
        alert(`${mes[6]}`); break;
    case 7:
        alert(`${mes[7]}`); break;
     case 8:
        alert(`${mes[8]}`); break;
    case 9:
        alert(`${mes[9]}`); break;
    case 10:
        alert(`${mes[10]}`); break;
    case 11:
        alert(`${mes[11]}`); break;
    case 12:
        alert(`${mes[12]}`); break;
    default:
        alert('Mes errado!'); break;
}