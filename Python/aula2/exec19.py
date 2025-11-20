'''
Tempo de Viagem: Faça um programa que leia a distância de uma viagem em quilômetros (km) e a velocidade média esperada em km/h. Calcule o tempo estimado da viagem em horas.
'''

distancia_km = float(input('Digite a distancia da viagem em quilômetros (km): '))
velocidademedia = float(input('Digite a velocidade média esperada em km/h: '))

tempo = distancia_km / velocidademedia

print(f'O tempo estimado da viagem é de {tempo:.2f} horas.')