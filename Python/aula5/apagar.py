#apagar um arquivo - importar biblioteca do sistema
import os #importa a biblioteca os para manipulação de arquivos e diretórios
#verificar se o arquivo existe antes de apagar
if os.path.exists('dados.txt'): #verifica se o arquivo existe 
    os.remove('dados.txt') #apaga o arquivo dados.txt
    print('Arquivo apagado com sucesso!') #mensagem de sucesso 
else: #se o arquivo não existir
    print('O arquivo não existe, não é possível apagar.') #mensagem de erro
 

