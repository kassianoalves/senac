'''

Perímetro e Área do Círculo: Crie um programa que leia o raio de um círculo. Calcule e mostre o seu perímetro 

'''


raio = float(input('Digite o raio do circulo:  '))

pi = 3.14159
perimetro = 2 * pi * raio
area = pi * raio ** 2

print(f'O perímetro do círculo é: {perimetro:.2f}')
print(f'A área do círculo é: {area:.2f}')