'''
Aumento Múltiplo: Faça um programa que leia o salário de um funcionário. Se o salário for superior a R$ 1.250,00, calcule um aumento de 10%. Se for inferior ou igual, o aumento é de 15%. Mostre o valor do aumento e o novo salário.

'''

salario_atual = float(input("Digite o salário atual do funcionário: "))

if salario_atual > 1250:
    percentual_aumento = 10
else:
    percentual_aumento = 15

valor_aumento = salario_atual * (percentual_aumento / 100)
novo_salario = salario_atual + valor_aumento

print(f'O valor do aumento é: R$ {valor_aumento:.2f}')
print(f'O novo salário reajustado é: R$ {novo_salario:.2f}')