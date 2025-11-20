'''
 Considere que o preço da tarifa de energia é R$ 0,50 por kWh. Pergunte ao usuário o consumo de energia em kWh e calcule o valor total a ser pago pela conta. Se o consumo for maior que 200 kWh, aplique um desconto de 10%. 

'''
consumo = float(input('Qual seu consumo de kwh: '))
kwh = 0.50

valorporconsumo = consumo * kwh


if consumo >= 200:
    valorporconsumo = valorporconsumo - valorporconsumo * 0.10
else:
    print('Nenhum valor a ser descontado')

print (f'Valor a ser pago: {valorporconsumo}')
   