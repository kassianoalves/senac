#Solicite um nome ao usuário e peça a quantidade de vezes que ele deseja exibi-lo na tela. Utilize um loop while.
nome = input('Um nome: ')
exibe= int(input('Quer exibir quantas vezes?'))
i=0
while i < exibe:
    print(nome)
    i+=1