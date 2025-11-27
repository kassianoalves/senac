#adicone um produto no arquivo produtos.txt usando o condigo python
with open('produtos.txt', 'a', encoding='utf-8') as arquivo: #abre o arquivo em modo de adição 
    arquivo.write('produto 4: Macarrão - R$ 12,00\n') #adiciona uma nova linha com o nome do produto e o preço


    