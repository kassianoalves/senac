idade = int(input('Qual a sua idade: '))
tempocontribuicao = int(input('Quantos anos de contribuição: '))

if idade >= 60 or tempocontribuicao >= 35:
    print('Você pode se aposentar')
else: 
    print(f'faltam {60 - idade} anos de idade. ')
    print(f'faltam {35 - tempocontribuicao} anos de tempo de contribuição. ')
     
    