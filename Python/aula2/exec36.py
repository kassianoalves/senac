'''
Aprovado ou Reprovado: Faça um programa que leia as duas notas de um aluno e calcule a média.

Média abaixo de 5.0: REPROVADO.

Média entre 5.0 e 6.9: RECUPERAÇÃO.

Média 7.0 ou superior: APROVADO.

'''

nota1 = float(input("Digite a primeira nota do aluno: "))
nota2 = float(input("Digite a segunda nota do aluno: "))

media = (nota1 + nota2) / 2


if media < 5.0:
    print(f'Média: {media:.2f} - REPROVADO')
elif 5.0 <= media < 7.0:
    print(f'Média: {media:.2f} - RECUPERAÇÃO')
else:
    print(f'Média: {media:.2f} - APROVADO')

print ("Fim do programa.")