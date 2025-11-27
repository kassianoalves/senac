#Ler um arquivo de texto chamado 'dados.txt' e imprimir seu conteúdo na tela.
with open('dados.txt', 'r', encoding='utf-8') as arquivo: #abre o arquivo em modo de leitura
    conteudo = arquivo.read() #lê todo o conteúdo do arquivo
    print('Conteúdo do arquivo dados.txt:') #exibe o conteúdo do arquivo
    print(conteudo)#imprime o conteúdo lido