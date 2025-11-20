a = int(input('Informe o valor de a: '))
b = int(input('Informe o valor de b: '))

if b > a :
    print('B é maior que A ')
    print('Ainda estou no if')
elif b < a: #elif é igual else if 
    print ('A é maior do que B')
else: 
    print('A e B são iguais')
print('Sai do if')