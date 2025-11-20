'''
Cálculo de Juros Simples: Faça um programa que leia o valor principal de um investimento, a taxa de juros anual e o tempo (em anos). Calcule e exiba o valor dos juros simples e o montante final. (Fórmula: $J = P \times i \times t$)

'''

principal = float(input('Digite o valor principal do investimento: '))
taxa_juros_anual = float(input('Digite a taxa de juros anual (em %): '))
tempo_anos = float(input('Digite o tempo do investimento (em anos): '))


juros_simples = principal * (taxa_juros_anual / 100) *  tempo_anos
montante_final = principal + juros_simples 

print(f'O valor dos juros simples é: R$ {juros_simples:.2f}')
print(f'O montante final é: R$ {montante_final:.2f}')