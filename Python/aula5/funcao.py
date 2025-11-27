#criando uma funcao
'''
def diga_ola():
    print("Olá, cruj!")

#chamando a funcao
diga_ola()
'''
#funcao com parametros
def saudacao(nome):
    print(f"Olá, {nome}!")

#chamando a funcao com argumento
saudacao("Kassiano")
saudacao("Maria")
saudacao("João")

#funcao com retorno
def soma(a, b):
    return a + b
resultado = soma(5, 3)
print(f"A soma é: {resultado}")

#funcao com retorno de valor booleano
def eh_par(numero):
    return numero % 2 == 0
print(eh_par(4))  # True
print(eh_par(7))  # False

#funcao com varios parametros
def descricao_pessoa(nome, idade, cidade):
    print(f"{nome} tem {idade} anos e mora em {cidade}.")
descricao_pessoa("Ana", 30, "São Paulo")
descricao_pessoa("Carlos", 25, "Rio de Janeiro")

#funcao que manipula listas
def adicionar_item(lista, item):
    lista.append(item)
minha_lista = [1, 2, 3]
adicionar_item(minha_lista, 4)
print(minha_lista)  # [1, 2, 3, 4]
adicionar_item(minha_lista, 5)
print(minha_lista)  # [1, 2, 3, 4, 5]


