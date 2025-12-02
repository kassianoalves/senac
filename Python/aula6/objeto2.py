#Exemplos com Herança;
#Herança é o mecanismo pelo qual uma classe pode herdar atributos e métodos de outra classe.
#A classe que herda é chamada de classe filha ou subclasse, e a classe da qual ela herda é chamada de classe pai ou superclasse.
#A herança permite reutilizar código e criar hierarquias de classes.
#Exemplo:
class Animal:
    def __init__(self, nome):
        self.nome = nome

#Classe Cachorro herda da classe Animal
class Cachorro(Animal):
    def fazer_som(self):
        return "Au Au"
class Gato(Animal):
    def fazer_som(self):
        return "Miau"
cachorro = Cachorro("Rex")
gato = Gato("Mimi")

print(f"{cachorro.nome} diz {cachorro.fazer_som()}")
print(f"{gato.nome} diz {gato.fazer_som()}")