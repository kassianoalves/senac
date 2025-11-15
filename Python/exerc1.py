"""Faça um programa para calcular a quantidade de latas de tintas para pintar
uma parede. O programa deverá solicitar ao usuário, a altura (float) e o
comprimento(float) da parede. Considere que a cobertura da tinta é de 1 litro
para cada 3 metros quadrados e que a tinta é vendida em latas de 3,6 litros,
que custam R$ 107,00. Informe ao usuário a quantidades de latas de tinta a
serem compradas e o preço total."""


import math
altura = float(input("Digite a altura da parede (em metros): "))
comprimento = float(input("Digite o comprimento da parede (em metros): "))
area = altura * comprimento
litros_necessarios = area / 3
latas_necessarias = math.ceil(litros_necessarios / 3.6)
custo_total = latas_necessarias * 107.00
print(f"Quantidade de latas necessárias: {latas_necessarias}")
print(f"Custo total: R$ {custo_total:.2f}")


alt= float(input("Digite a altura da parede: "))
comp= float(input("Digite o comprimento da parede: "))
area= alt * comp
litros= area / 3
litros_por_lata= 3.6
latas= litros / litros_por_lata
latas_arredondadas=math.ceil(latas)
custo= latas_arredondadas * 107.00
print(f'Serão necessárias {latas_arredondadas} latas de tinta')
print(f'O custo total é de R$ {custo:.2f}')