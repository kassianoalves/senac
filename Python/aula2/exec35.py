'''
Aumento Múltiplo de Salário Avançado: Um sistema de RH dará um aumento de salário.

Salários superiores a R$ 3.000,00 terão aumento de 5%.

Salários entre R$ 1.000,00 e R$ 3.000,00 (inclusive) terão aumento de 10%.

Salários inferiores a R$ 1.000,00 terão aumento de 15%. Leia o salário e calcule o novo valor.
'''

salario_atual = float(input("Digite o salário atual do funcionário: "))

if salario_atual > 3000:
    percentual_aumento = 5
elif salario_atual >= 1000 and salario_atual <= 3000:
    percentual_aumento = 10
else:
    percentual_aumento = 15


valor_aumento = salario_atual * (percentual_aumento / 100)

novo_salario = salario_atual + valor_aumento

print(f'O novo salário do funcionário, após o aumento de {percentual_aumento}%, é: R$ {novo_salario:.2f}')