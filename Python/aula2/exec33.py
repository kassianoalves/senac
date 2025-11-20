'''
Ano Bissexto: Crie um programa que leia um ano qualquer e mostre se ele é bissexto. (Um ano é bissexto se for divisível por 4, exceto se for divisível por 100, mas não por 400).


'''

ano = int(input("Digite um ano qualquer: "))

if (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0):
    print(f'O ano {ano} é bissexto.')
else:
    print(f'O ano {ano} não é bissexto.')