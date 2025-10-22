// suposição: um estoque com código de categoria
// categoria 0 = bebida
// categoria 1 = perecível
// categoria 2 = ração
// categoria 3 = limpeza
console.log('testando com o Switch case')

let categoria = 0;
switch (categoria){
    case 0: // caso categoria seja 0...escreve:
        console.log('Bebida');
        break; // para a verificação
    case 1:
        console.log('Perecível');
        break;
    case 2:
        console.log('Ração');
        break;
    case 3:
        console.log('Limpeza');
        break;
    default: // mesma coisa do else (em python)
        console.log('Categoria não encontrada')
        break;
}
console.log('Testando a mesma coisa com a função IF')

if(categoria == 0){
    console.log('Bebida');}

    else if(categoria == 1){
        console.log('Perecivel');    
}
    else if(categoria == 2){
        console.log('Ração');
    }
    else if(categoria == 3){
        console.log('Limpeza');
    }
    else(console.log('Categoria não encontrada'))