'''
Conversão de Dólar para Real: Escreva um programa que solicite a cotação atual do dólar e a quantidade de Reais (R$) que o usuário possui. Calcule e mostre quantos dólares ($) ele pode comprar.
'''

cotacao_dolar = float(input("Digite a cotação atual do dólar (R$): "))
quantidade_reais = float(input("Digite a quantidade de Reais (R$) que você possui: "))

quantidade_dolares = quantidade_reais / cotacao_dolar

print(f'Com R$ {quantidade_reais:.2f}, você pode comprar $ {quantidade_dolares:.2f}.')