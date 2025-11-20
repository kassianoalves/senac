'''
Medidor de Distância: Faça um programa que leia um valor em metros e o exiba convertido em centímetros e milímetros.

'''

metros = float(input("Digite a distância em metros: "))

centimetros = metros * 100
milimetros = metros * 1000

print (f'A distancia de {metros:.2f} metros corresponde a {centimetros:.2f} centímetros e {milimetros:.2f} milímetros.')