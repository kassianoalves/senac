'''
Cálculo de Reajuste Salarial: Faça um programa que leia o salário atual de um funcionário e um percentual de aumento. Calcule e exiba o valor do aumento e o novo salário reajustado.
'''

salario_atual = float(input("Digite o salário atual do funcionário: "))
percentual_aumento = float(input("Digite o percentual de aumento (em %): "))

valor_aumento = salario_atual * (percentual_aumento / 100)
novo_salario = salario_atual + valor_aumento

print(f'O valor do aumento é: R$ {valor_aumento:.2f}')
print(f'O novo salário reajustado é: R$ {novo_salario:.2f}')