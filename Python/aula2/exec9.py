'''
9) Crie um programa que calcule o valor total de uma compra feita em várias parcelas. Pergunte ao usuário quantas parcelas ele deseja e o valor de cada uma. Se o total ultrapassar R$ 1.000,00, acrescente 5% de juros. 
'''

parcela = float(input("Digite o valor de cada parcela: R$ "))
num_parcelas = int(input("Digite o número de parcelas: "))

total_compra = parcela * num_parcelas

if total_compra > 1000:
    juros = total_compra * 0.05
    total_compra += juros
    print(f'O total da compra com juros é: R$ {total_compra:.2f} (Juros de R$ {juros:.2f})')
else:
    print(f'O total da compra é: R$ {total_compra:.2f}')

