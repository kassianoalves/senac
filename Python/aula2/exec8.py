'''
Escreva um programa para ler o salário de um funcionário, e calcular o IRPF que precisa ser descontado do salário. 

'''

salario = float(input('Digite o salário: '))



if salario <= 1900:
    ir = 0
elif salario <= 2000:
    ir = salario * 0.0075
elif salario <= 2500:
    ir = salario * 0.075
elif salario <= 3000:
    ir = salario * 0.090

print(f'IRPF A SER DESCONTADO: {ir:.2f}') 


