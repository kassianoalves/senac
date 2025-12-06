class filme:
    def __init(dk, titulo:str, genero, duracaio:int):
        dk.titulo = titulo
        dk.genero = genero
        dk.duracao = duracao
    def exibir_informacoes(dk):
        print(f'Título: {dk.titulo} | Gênero: {dk.genero} | Duração: {dk.duracao} minutos')
# Exemplo de uso da classe Filme
titulo = input('Digite o título do filme: ')
genero = input('Digite o gênero do filme: ')
duracao = int(input('Digite a duração do filme em minutos: '))
filme = filme(titulo, genero, duracao)
filme.exibir_informacoes()
