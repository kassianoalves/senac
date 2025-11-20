'''
Analisador de Texto: Desenvolva um programa que leia uma frase e:

Mostre a frase com todas as letras maiúsculas.

Mostre quantas letras (desconsiderando espaços) ela tem.
'''

texto = input("Digite uma frase: ")

texto_maiusculo = texto.upper()
quantidade_letras = len(texto.replace(" ", ""))

print(f'Frase em maiúsculas: {texto_maiusculo}')
print(f'Quantidade de letras (sem espaços): {quantidade_letras}')