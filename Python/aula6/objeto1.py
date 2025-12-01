#Classe é o que vai estruturar o objeto
#Objeto é a instancia da classe
#Atributos são as caracteristicas do objeto
#Métodos são as ações que o objeto pode realizar

# '''Classe que representa uma pessoa e começa com atributos nome e idade. Self é uma herança automática da classe Pessoa para os métodos internos da classe'''

class Pessoa: 
    def __init__ (self, nome, idade): #método construtor 
        self.nome = nome
        self.idade = idade
pessoa1 = Pessoa("Kassiano",30) #instancia do objeto pessoa
print(pessoa1.nome, pessoa1.idade)

class Carro: 
    def __init__ (self, modelo, ano): #método construtor 
        self.modelo = modelo
        self.ano = ano

    def exibir_informacoes(self): #método
        print(f"Carro: {self.modelo}, Ano: {self.ano}")

    def reparar(self):
        print(f'O carro {self.modelo} precisa de reparos.')

carro1 = Carro("Fusca", 1967)
carro1.exibir_informacoes
carro1.reparar()