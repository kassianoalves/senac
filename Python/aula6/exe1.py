#  Crie uma classe chamada Pessoa com os atributos nome e idade. Adicione um método chamado exibir_informacoes que exibe o nome e a idade da pessoa. 
class Pessoa:
    def __init__ (self, nome, idade): #método construtor 
        self.nome = nome
        self.idade = idade
    def exibir_informacoes(self):
        print(f"Nome: {self.nome}, idade: {self.idade}")
pessoa1 = Pessoa("Kassiano",30) #instancia do objeto pessoa
pessoa1.exibir_informacoes()