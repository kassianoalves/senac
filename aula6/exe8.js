let fla = 0, vas =0, bota =0, flu = 0, outros=0;
let time;
for (let i= 0; i<=10; i++){
    let time = prompt('Nome do seu time');
    switch (time){ // time está recebendo os nomes
        case 'fla':
            fla++ ; break; // variavel fla está inserindo um contador para a quantidade de leitura da string 'fla' que está sendo inserida.
        case 'flu':
            flu++ ; break;
        case 'bota':
            bota++; break;
        case 'vas':
            vas++; break;
        default:
            outros++; break;
    }
    
}
document.write('Flamengo',fla)
document.write('<br>Fluminense', flu)
document.write('<br>Botafogo', bota)
document.write('<br>Vasco', vas)
document.write('<br>Outros', outros)