//    Crie uma função que sorteia uma carta de um baralho (ex: "Ás de Copas", "Rei de Espadas", etc). Dica: use dois arrays (valores e naipes). 
function sortearCarta(){
    let valores = ['Ás','2','3','4','5','6','7','8','9','10','Valete','Dama','Rei'];
    let naipes = ['Copas','Paus','Espadas','Ouro'];
    let valor = valores[Math.floor(Math.random()* valores.length)];
    let naipe = naipes[Math.floor(Math.random()* naipes.length)]
    console.log('A carta sorteada foi: '+valor+' de '+naipe);
}
sortearCarta();