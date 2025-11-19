""" Um determinado prêmio de loteria saiu para um bolão de três amigos. Uma lei
garante que todo prêmio de loteria deva pagar um imposto de 7% para os
cofres estaduais. Do total descontado o imposto, os amigos irão dividir o
prêmio da seguinte maneira:
● O primeiro ganhador receberá 46%;
● O segundo receberá 32%;
● O terceiro receberá o restante; Faça um programa que leia o valor total
do prêmio, calcule o desconto, o valor que cada um tem direito e
imprima o total do prêmio, o prêmio descontado o imposto e a quantia
recebida por cada um dos ganhadores."""


valor_total = float(input("Digite o valor total do prêmio: R$ "))
imposto = 0.07
ganhador1 = valor_total * 0.46
ganhador2 = valor_total * 0.32
ganhador3 = valor_total - ((ganhador1 + ganhador2))
print(f'Valor total do prêmio: R$ {valor_total:.2f}')
print(f'Valor do prêmio descontado o imposto: R$ {valor_total - (valor_total * imposto):.2f}')
print(f'ganhador 1 receberá: R$ {ganhador1:.2f}')
print(f'ganhador 2 receberá: R$ {ganhador2:.2f}')
print(f'ganhador 3 receberá: R$ {ganhador3:.2f}')