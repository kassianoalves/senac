'''
Custo da Viagem: Faça um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$ 0,50 por Km para viagens de até 200 Km e R$ 0,45 por Km para viagens mais longas.

'''

distancia_km = float(input("Digite a distância da viagem em Km: "))

if distancia_km <= 200:
    preco_passagem = distancia_km * 0.50
else:
    preco_passagem = distancia_km * 0.45

print(f'O preço da passagem para uma viagem de {distancia_km:.2f} Km é: R$ {preco_passagem:.2f}')