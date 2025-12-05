''' 
Crie uma classe chamada ItemEstoque com os atributos:
nome, quantidade e preco_unitario.

adicione os seguintes métodos à classe:
adicionar_estoque(quantidade): Adiciona a quantidade especificada ao estoque.
remover_estoque(quantidade): Remove a quantidade especificada do estoque se houver estoque suficiente.
calcular_valor_total(): Retorna o valor total do estoque (quantidade * preco_unitario).
'''
class ItemEstoque:
    def __init__(kassiano, nome:str, quantidade:int, preco_unitario:float):
        kassiano.nome = nome
        kassiano.quantidade = quantidade
        kassiano.preco_unitario = preco_unitario
    
    def adicionar_estoque(kassiano, quantidade:int):
        kassiano.quantidade += quantidade
        print(f'Estoque atualizado: {kassiano.quantidade} unidade de {kassiano.nome}.')
    
    def remover_estoque(kassiano, quantidade:int):
        if quantidade <= kassiano.quantidade:
            kassiano.quantidade -= quantidade
            print(f'Removido {quantidade} unidades de {kassiano.nome}. Estoque restante: {kassiano.quantidade}.')
        else:
            print(f'Estoque insuficiente para {kassiano.nome}.')
    def calcular_valor_total(kassiano):
        return kassiano.quantidade * kassiano.preco_unitario

# Exemplo de uso da classe ItemEstoque
item = input('Digite o nome do item: ')
quantidade = int(input('Digite a quantidade inicial: '))
preco_unitario = float(input('Digite o preço unitário: '))
item = ItemEstoque(item, quantidade, preco_unitario)

valor_total = item.calcular_valor_total()
print(f'Contém {item.quantidade} unidades de {item.nome}. Valor total: R${valor_total:.2f}')
