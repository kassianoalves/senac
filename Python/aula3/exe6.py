#Escreva um programa que receba 10 números inteiros e conte quantos deles são pares.

i=0
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for x in num:
    if x % 2 == 0:
        print(f'Par {x}')
