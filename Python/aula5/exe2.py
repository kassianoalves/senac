#ler todo o conteudo criado em - produtos.txt - e exibir no console
with open('produtos.txt', 'r', encoding='utf-8') as arquivo: #abre o arquivo em modo de leitura 
    conteudo=arquivo.read() #lê todo o conteúdo do arquivo
    print('Conteudo do arquivo produtos.txt:')#exibe o conteúdo lido
    print(conteudo)#exibe o conteúdo lido