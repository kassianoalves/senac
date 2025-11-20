'''
Análise de Dígitos: Crie um programa que leia um número inteiro de 4 dígitos e mostre na tela cada um dos seus dígitos separadamente (ex: Unidade, Dezena, Centena e Milhar).

'''

numero = int(input("Digite um número inteiro de 4 dígitos: "))

unidade = numero % 10
dezena = (numero // 10) % 10
centena = (numero // 100) % 10
milhar = (numero // 1000) % 10

print (f'Milhar: {milhar}')
print (f'Centena: {centena}')
print (f'Dezena: {dezena}')
print (f'Unidade: {unidade}')