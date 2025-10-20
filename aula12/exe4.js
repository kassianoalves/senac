//    Crie um array com 10 números e exiba apenas os que forem múltiplos de 3. 
let num = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i <=10; i++){
    if((num[i]%3)==0){
        console.log('Multi de 3:' + num[i])
    }
}