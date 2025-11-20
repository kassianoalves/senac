'''
Escreva um programa que leia o valor de um produto e o percentual de desconto. O programa deve exibir o valor final com o desconto aplicado. 

'''

produto = float(input('Digite o valor do produto: '))
desconto = float(input('Digite o percentual de desconto: '))

valorfinal = produto - produto*(desconto / 100)

print(f'O valor do produto com desconto é: {valorfinal:.2f} R$')