'''
Maior e Menor Valores: Desenvolva um programa que leia três números e mostre qual é o maior e qual é o menor entre eles.

'''

num1 = int(input("Digite o primeiro número: "))
num2 = int(input("Digite o segundo número: "))
num3 = int(input("Digite o terceiro número: "))


if num1 > num2 and num1 > num3:
    maior = num1   
elif num2 > num1 and num2 > num3:
    maior = num2
else:
    maior = num3

if num1 < num2 and num1 < num3:
    menor = num1
elif num2 < num1 and num2 < num3:
    menor = num2
else:
    menor = num3

print(f'O maior número é: {maior}')
print(f'O menor número é: {menor}')