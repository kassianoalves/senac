#Escreva um programa que receba números inteiros até que o usuário digite 0. Calcule e exiba a média dos números positivos digitados.
soma = 0
i = 0
num = int(input('Digite um numero inteiro: '))
while num!=0:
   
    soma += num
    i += 1
   
    num = int(input('Digite um numero inteiro: '))
      
print(f'Media: {soma/i}')