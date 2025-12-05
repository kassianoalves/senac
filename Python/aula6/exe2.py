
class Produto:
    def __init__(self, nome:str, preco:float, estoque:int):
        self.nome = nome
        self.preco = preco
        self.estoque = estoque
        
    def vender(self, quantidade):
        if quantidade <= self.estoque:
            self.estoque -= quantidade
            print(f'Venda realizada: {quantidade} unidades de {self.nome}. Estoque restante: {self.estoque}.')
        else:
            print(f'Estoque insuficiente para {self.nome}.')

    def repor(self, quantidade):
        self.estoque += quantidade
        print(f'Estoque atualizado: {self.estoque} unidades de {self.nome}.')

    def exibir_informacoes(self):
        print(f'Produto: {self.nome}, Preço: R${self.preco:.2f}, Estoque: {self.estoque} unidades.')

produto1 = Produto('Paçoca', 5.00, 100)
produto1.exibir_informacoes()
produto1.vender(20)
produto1.repor(5)