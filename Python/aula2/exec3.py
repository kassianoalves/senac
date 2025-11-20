'''
 Crie um programa que leia um valor em reais (R$) e mostre o valor convertido em dólares (US$), considerando uma taxa de câmbio fornecida pelo usuário. 
'''

valor_reais = float(input('Digte um valor em reais: '))
cambio1 = float(input('Digita um valor para cambio: '))


result1 = valor_reais / cambio1


print(f'A conversão em dolar é: {result1:.2f}')


