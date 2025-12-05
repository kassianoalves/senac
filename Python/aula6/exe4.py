#Cria uma classe Estudante com os atributos nome e notas (uma lista de notas),
#e um método para calcular a média das notas.
#exibir uam mensagem de estudande aprovado (média >= 6) ou reprovado (média <5).

class Estudante:
    def __init__(self, nome:str, notas:list):
        self.nome = nome
        self.notas = notas
    
    def calcular_media(self):
        if len(self.notas) == 0:
            return 0
        return sum(self.notas) / len(self.notas)
    
    def exibir_resultado(self):
        media = self.calcular_media()
        if media >= 6:
            print(f'Estudante {self.nome} aprovado com média {media:.2f}.')
        else:
            print(f'Estudante {self.nome} reprovado com média {media:.2f}.')

lista_notas = []#lista para armazenar as notas do estudante
nome = input("Digite o nome do estudante: ")

for i in range(4):#loop para ler 4 notas do estudante
    nota = int(input(f"Digite a nota {i+1}: "))#leia a nota do estudante e transforme em inteiro
    lista_notas.append(nota) #adiciona a nota na lista

estudante1 = Estudante(nome, lista_notas)
estudante1.exibir_resultado()