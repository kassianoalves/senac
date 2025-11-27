#    Implemente funções que gerenciam um sistema de lista de alunos: 
#Adicionar um aluno. 
#Remover um aluno. 
#Exibir todos os alunos. 

with open('alunos.txt', 'w') as arquivo: #simplesmente para criar o arquivo se não existir
    pass  # Garante que o arquivo exista 

def adicionar_aluno(nome): # Adiciona um aluno ao arquivo
    with open('alunos.txt', 'a') as arquivo: # Abre o arquivo em modo de anexação
        arquivo.write(nome + '\n') # Escreve o nome do aluno no arquivo
    print(f'Aluno {nome} adicionado com sucesso')

def remover_aluno(nome): # Remove um aluno do arquivo
    with open('alunos.txt', 'r') as arquivo: # Abre o arquivo em modo de leitura
        alunos = arquivo.readlines() # Lê todas as linhas do arquivo
    with open('alunos.txt', 'w') as arquivo: # Abre o arquivo em modo de escrita
        encontrado = False # Flag para verificar se o aluno foi encontrado
        for aluno in alunos: # Itera sobre cada aluno
            if aluno.strip() != nome: # Se o nome não for o que queremos remover
                arquivo.write(aluno) # Escreve o aluno de volta no arquivo
            else: 
                encontrado = True # Marca que o aluno foi encontrado
        if encontrado: #Adiciona a mensagem de sucesso ou falha
            print(f'Aluno {nome} removido com sucesso')
        else:
            print(f'Aluno {nome} não encontrado')

def exibir_alunos(): # Exibe todos os alunos do arquivo
    with open('alunos.txt', 'r') as arquivo: # Abre o arquivo em modo de leitura
        alunos = arquivo.readlines() # Lê todas as linhas do arquivo
    if alunos: # Verifica se há alunos na lista
        print('Lista de Alunos:') 
        for aluno in alunos: # Itera sobre cada aluno
            print(aluno.strip()) # Imprime o nome do aluno sem espaços extras
    else:
        print('Nenhum aluno cadastrado')

while True: # Loop principal do programa
    print('\nMenu:')
    print('1. Adicionar Aluno')
    print('2. Remover Aluno')
    print('3. Exibir Alunos')
    print('4. Sair')
    escolha = input('Escolha uma opção: ') # Solicita a escolha do usuário

    if escolha == '1': # Adicionar aluno
        nome = input('Digite o nome do aluno a ser adicionado: ')
        adicionar_aluno(nome)
    elif escolha == '2': # Remover aluno
        nome = input('Digite o nome do aluno a ser removido: ')
        remover_aluno(nome)
    elif escolha == '3': # Exibir alunos
        exibir_alunos()
    elif escolha == '4': # Sair do programa
        print('Saindo do programa...')
        break
    else:
        print('Opção inválida, tente novamente.')

