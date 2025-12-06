'''
Crie uma classe Tarefa com os atributos descricao e status inicialmente definido como "pendente".
Adicione os seguintes métodos à classe:
marcar_como_concluida(): Altera o status da tarefa para "concluída".
exibir_tarefa(): Exibe a descrição e o status da tarefa.

'''
class Tarefa:
    def __init__(dk, descricao:str):
        dk.descricao = descricao
        dk.status = "pendente"
        
    def marcar_como_concluida(dk):
        dk.status = "concluída"
        
    def exibir_tarefa(dk):
        print(f'Tarefa: {dk.descricao} | Status: {dk.status}')

# Exemplo de uso da classe Tarefa
descricao = input('Digite a descrição da tarefa: ')
tarefa = Tarefa(descricao)
tarefa.exibir_tarefa()
tarefa.marcar_como_concluida()