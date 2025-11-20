#maior idade 

idade = int(input('informe a idade: '))

if idade > 18:
    print('maior de idade')
    if idade > 65:
        print('vale idoso disponivel')
    else:
        print('ainda paga passagem')
elif idade >= 7:
    print('menor de idade no ensino fundamental')
else:
    print('menor de idade')