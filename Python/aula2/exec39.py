'''
Primeiras Letras de um Nome: Crie um programa que leia o nome completo de uma pessoa e mostre apenas o primeiro e o último nome separadamente.

'''

nomecompleto = input("Digite seu nome completo: ").strip()

nomes = nomecompleto.split()

print(f'Primeiro nome: {nomes[0]}')
print(f'Último nome: {nomes[-1]}')