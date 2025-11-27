#Criar ou abrir um arquivo para escrita
with open('dados.txt', 'w', encoding='utf-8') as arquivo:
    #Escrever dados no arquivo
    arquivo.write('Linha 1: Criando arquivos e editando!\n')
    arquivo.write('Linha 2: Programação em Python.\n')
    arquivo.write('Linha 3: Aluno: Kassiano.\n')