'''
Quebrando um Número: Crie um programa que leia um número real (com vírgula) qualquer e mostre na tela a sua porção inteira. (Ex: 6.127 se torna 6).

'''

import math

numero = float(input("Digite um número real (com vírgula): "))

porcao_inteira = math.trunc(numero)

print(f'A porção inteira de {numero} é {porcao_inteira}.')