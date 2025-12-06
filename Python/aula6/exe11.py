class ReservaHotel:
    def __init__(dk, nome_cliente, dias_reserva, valor_diaria):
        dk.nome_cliente = nome_cliente
        dk.dias_reserva = dias_reserva
        dk.valor_diaria = valor_diaria
    def calcular_custo_total(dk):
        return dk.dias_reserva * dk.valor_diaria
    def __str__(self):
        return (f'Reserva para {dk.nome_cliente}: {dk.dias_reserva} dias a R${dk.valor_diaria:.2f} por dia. '
                f'Custo total: R${dk.calcular_custo_total():.2f}')

# Exemplo de uso da classe ReservaHotel
nome_cliente = input('Digite o nome do cliente: ')
dias_reserva = int(input('Digite o número de dias da reserva: '))
valor_diaria = float(input('Digite o valor da diária: '))
reserva = ReservaHotel(nome_cliente, dias_reserva, valor_diaria)
print(reserva)