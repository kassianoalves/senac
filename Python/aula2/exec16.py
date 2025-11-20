'''
Conversor de Temperatura: Crie um programa que leia uma temperatura em graus Celsius e a converta para Fahrenheit. (A fórmula é: $F = C \times 1.8 + 32$)
'''

graus_celsius = float(input("Digite a temperatura em graus Celsius: "))

graus_fahrenheit = graus_celsius * 1.8 + 32


print(f'A conversão de temperatura de Celsius para Fahrenheit é: {graus_fahrenheit}°F')