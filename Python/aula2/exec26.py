'''
Cálculo de Consumo de Combustível: Desenvolva um programa que leia a quantidade de quilômetros rodados e a quantidade de litros de combustível gasta. Calcule e exiba o consumo médio do veículo (Km/L).

'''

kmrodados = float(input("Digite a quantidade de quilômetros rodados: "))
litrosgastos = float(input("Digite a quantidade de litros de combustível gasta: "))

consumomedio = kmrodados / litrosgastos 

print(f'O consumo médio do veículo é: {consumomedio:.2f} Km/L')