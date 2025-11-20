n1 = float(input('Digita a primeira nota: '))
n2 = float(input('Digita a segunda nota: '))
n3 = float(input('Digita a terceira nota: '))

media =  ( n1 + n2 + n3 ) / 3

if media >= 6:
    print('Aluno aprovado!')
else:
    print('Aluno reprovado!')

print (f'A média do aluno é: {media:.2f}')