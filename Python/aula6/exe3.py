#Crie uma classe Livro com os atributos título, autor. Subscrave o metedo especiaal __str__ oara que ao usar print em um objeto da classe ele exiba "Título: [título], Autor: [autor]".

class Livro:
    def __init__(self, titulo:str, autor:str):
        self.titulo = titulo
        self.autor = autor
    
    def __str__(self):
        return f'Título: {self.titulo}, Autor: {self.autor}'
    
livro = Livro("Provérbios", "Rei Salomão")
print(livro)