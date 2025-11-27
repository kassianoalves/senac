#Escreva um arquivo chamado produtos.txt com os seguintes dados:
#produto 1: Arroz - R$ 20,00
#produto 2: Feijão - R$ 15,00
#produto 3: Açucar - R$ 10,00

with open('produtos.txt', 'w', encoding='utf-8') as arquivo: # abre o arquivo para escrita 
    arquivo.write('produto 1: Arroz - R$ 20,00\n') # escreve a primeira linha no arquivo
    arquivo.write('produto 2: Feijão - R$ 15,00\n')
    arquivo.write('produto 3: Açucar - R$ 10,00\n')