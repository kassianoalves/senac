#Cacule o preço medio dos produtos no arquivo produtos.txt

with open('produtos.txt', 'r', encoding='utf-8') as arquivo: #abre o arquivo em modo de leitura 
    conteudo=arquivo.readlines() #lê todas as linhas do arquivo e armazena em uma lista 
    total=0 #variável para armazenar o total dos preços 
    for linha in conteudo:
        partes=linha.split('- R$')#separa o nome do produto do preço usando o delimitador - R$ 
        preco=float(partes[1].strip().replace(',','.')) #converte string para float e troca virgula por ponto 
        total+=preco #soma o preço ao total 
    media=total/len(conteudo) #calcula a média dividindo o total pelo número de produtos 
    print(f'Preço médio dos produtos: R$ {media:.2f}')#exibe a média formatada com duas casas decimais 