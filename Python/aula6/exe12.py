'''
Crie uma classe chamada "Produto" que represente um produto em um sistema de inventário. A classe deve ter os seguintes atributos:
- nome (string): o nome do produto
- preco (float): o preço do produto
- codigo (string): o código do produto
adicione um metodo especial __str__ para exibir as informações do produto no formato "Nome: [nome], Preço: [preco], Código: [codigo]".
e um metodo para aplicar desconto

'''
class Produto:
    def __init__(self, nome:str, preco:float, codigo:str):
        self.nome = nome
        self.preco = preco
        self.codigo = codigo
    
    def aplicar_desconto(self, percentual:float):
        desconto = self.preco * (percentual / 100)
        self.preco -= desconto
        print(f'Desconto aplicado: R${desconto:.2f}. Novo preço: R${self.preco:.2f}.')
    
    def __str__(self):
        return f'Nome: {self.nome}, Preço: R${self.preco:.2f}, Código: {self.codigo}'
# Exemplo de uso da classe Produto
nome = input('Digite o nome do produto: ')
preco = float(input('Digite o preço do produto: '))
codigo = input('Digite o código do produto: ')
produto = Produto(nome, preco, codigo)
print(produto)