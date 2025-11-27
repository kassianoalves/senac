#Lendo o conteudo do arquivo - read - colocar numa lista
with open('dados.txt', 'r', encoding='utf-8') as arquivo: #abre o arquivo em modo de leitura
    conteudo=arquivo.read()#lê todo o conteúdo do arquivo como uma única string
    #split procura o delimitador e quebra a informação em uma lista
    linhas=conteudo.split(':\n')#separa o conteúdo em linhas usando ':\n' como delimitador
    print(linhas)#exibe a lista completa
    print('Conteudo do arquivo com split:')
    for linha in linhas:#itera sobre cada linha na lista linhas
        print(linha.strip())#imprime cada linha removendo espaços em branco extras com strip() 