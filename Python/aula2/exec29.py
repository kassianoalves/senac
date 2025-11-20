'''
Tipo de Triângulo: Desenvolva um programa que leia o comprimento de três lados e determine se eles podem formar um triângulo. Se puderem formar, informe se é Equilátero (três lados iguais), Isósceles (dois lados iguais) ou Escaleno (todos os lados diferentes).
'''

lado1 = float(input("Digite o comprimento do primeiro lado: "))
lado2 = float(input("Digite o comprimento do segundo lado: "))
lado3 = float(input("Digite o comprimento do terceiro lado: "))

if (lado1 + lado2 > lado3) and (lado1 + lado3 > lado2) and (lado2 + lado3 > lado1):
    if lado1 == lado2 == lado3:
        print("O triângulo é Equilátero.")
    elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
        print("O triângulo é Isósceles.")
    else:
        print("O triângulo é Escaleno.")
else:
    print("Os lados fornecidos não formam um triângulo.")