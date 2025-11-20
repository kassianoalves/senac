'''
Comparação de Números: Faça um programa que leia dois números e informe qual deles é o maior ou se eles são iguais.

'''

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))

if num1 > num2:
    print(f'O maior número é: {num1}')
elif num2 > num1:
    print(f'O maior número é: {num2}')
else:
    print("Os dois números são iguais.")