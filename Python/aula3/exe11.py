#Crie um programa que calcule o consumo total de energia de vários aparelhos em uma casa. Pergunte o consumo de cada aparelho em kWh e a quantidade de horas que o aparelho fica ligado por dia. O programa deve somar o consumo diário de todos os aparelhos e calcular o custo total de energia no mês. 

total_consumo_diario = 0.0
custo_por_kwh = float(input("Digite o custo da energia por kWh: "))
while True:
    aparelho = input("Digite o nome do aparelho (ou 'fim' para terminar): ")
    if aparelho.lower() == 'fim':
        break
    consumo_kwh = float(input(f"Digite o consumo de {aparelho} em kWh: "))
    horas_por_dia = float(input(f"Quantas horas por dia o {aparelho} fica ligado? "))
    consumo_diario = consumo_kwh * horas_por_dia
    total_consumo_diario += consumo_diario
    print(f"O consumo diário de {aparelho} é {consumo_diario:.2f} kWh.")
consumo_mensal = total_consumo_diario * 30
custo_total = consumo_mensal * custo_por_kwh
print(f"O consumo total diário de energia é {total_consumo_diario:.2f} kWh.")
print(f"O consumo total mensal de energia é {consumo_mensal:.2f} kWh.")
print(f"O custo total de energia no mês é R${custo_total:.2f}.") 
