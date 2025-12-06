'''
Implemente uma clase Carrinho com os metodos:
adicionar_item(nome:str, preco:float): Adiciona um item ao carrinho.
remover_item(nome:str): Remove um item do carrinho pelo nome.
calcular_total(): Retorna o valor total dos itens no carrinho.
exibir_itens(): Exibe todos os itens no carrinho com seus preços.
'''
class Carrinho:
    def __init__(dk, itens:list, total:float):
        dk.itens = []
        dk.total = 0.0
    def adicionar_item(dk, nome:str, preco:float):
        dk.itens.append({'nome': nome, 'preco': preco})
        dk.total += preco
        print(f'Item {nome} adicionado ao carrinho por R${preco:.2f}.')
    def remover_item(dk, nome:str):
        for item in dk.itens:
            if item['nome'] == nome:
                dk.itens.remove(item)
                dk.total -= item['preco']
                print(f'Item {nome} removido do carrinho.')
                return
        print(f'Item {nome} não encontrado no carrinho.')
    def calcular_total(dk):
        return dk.total
    def exibir_itens(dk):
        if not dk.itens:
            print('O carrinho está vazio.')
            return
        print('Itens no carrinho:')
        for item in dk.itens:
            print(f"- {item['nome']}: R${item['preco']:.2f}")
            
# Exemplo de uso da classe Carrinho com input do usuário
carrinho = Carrinho([], 0.0)
while True:
    acao = input("Digite 'adicionar' para adicionar um item, 'remover' para remover um item, 'exibir' para exibir itens, 'total' para calcular total ou 'sair' para sair: ").lower()
    if acao == 'adicionar':
        nome = input("Digite o nome do item: ")
        preco = float(input("Digite o preço do item: "))
        carrinho.adicionar_item(nome, preco)
    elif acao == 'remover':
        nome = input("Digite o nome do item a ser removido: ")
        carrinho.remover_item(nome)
    elif acao == 'exibir':
        carrinho.exibir_itens()
    elif acao == 'total':
        total = carrinho.calcular_total()
        print(f'Total do carrinho: R${total:.2f}')
    elif acao == 'sair':
        print("Saindo do programa.")
        break
    else:
        print("Ação inválida. Tente novamente.")
exit()
exibir_itens()
total = carrinho.calcular_total()
print(f'Total do carrinho: R${total:.2f}')
