#    Uma empresa fornece um arquivo de texto com nomes e idades dos funcionários. A tarefa é: 
#Exibir os dados no console. 
#Calcular a média das idades. 
#Permitir ao usuário adicionar ou remover funcionários. 
#Exemplo de Arquivo funcionarios.txt: 
#             Ana,25 
#           Carlos,30 
#           Maria,28 
#   Use funções para implementar as tarefas 

# função para exibir os dados no console
def exibir_dados():
    with open("funcionarios.txt","r",encoding="utf-8") as arquivo:
        conteudo = arquivo.readlines()
        print("Funcionarios:")
        for linha in conteudo:
            print(linha.strip())

# função para calcular a média das idades
def calcular_media():
    # Abrir o arquivo em modo de leitura
    with open("funcionarios.txt", "r") as arquivo:
        # Ler todas as linhas do arquivo
        conteudo = arquivo.readlines()
        # Criar uma lista com as idades
        idades = [int(linha.split(",")[1]) for linha in conteudo]
        # Calcular a média das idades
        media = sum(idades) / len(idades)
        # Imprimir a média com 2 casas decimais
        print(f"Média das idades: {media:.2f}")
        print(idades)


def adicionar_funcionario(nome, idade):
    with open("funcionarios.txt","a",encoding="utf-8") as arquivo:
        arquivo.write(f"{nome},{idade}\n")
        print(f"funcionario {nome} adicionado")

# Função para excluir um funcionário
def excluir_funcionario(nome):
    # Abrir o arquivo em modo de leitura
    with open("funcionarios.txt", "r") as arquivo:
        # Ler todas as linhas do arquivo
        conteudo = arquivo.readlines()
    # Abrir o arquivo em modo de escrita
    with open("funcionarios.txt", "w") as arquivo:
        # Percorrer cada linha do conteúdo e escrever no arquivo apenas se o nome não estiver presente
        for linha in conteudo:
            if nome not in linha:
                arquivo.write(linha)
    # Imprimir a mensagem de sucesso
    print(f"Funcionário {nome} excluído.")


adicionar_funcionario("Arrascaeta",28)
adicionar_funcionario("Danilo",32)
exibir_dados()
calcular_media()
excluir_funcionario("Arrascaeta")