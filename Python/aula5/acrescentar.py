#acrescentar linhas no texto - append
with open('dados.txt', 'a', encoding='utf-8') as arquivo: #'a' de append - acrescentar linhas no arquivo já existente 
    arquivo.write('Linha 4: Projeto de Python em andamento.\n')