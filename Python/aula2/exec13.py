altura = float(input("Digite a sua altura: "))
peso = float(input("Digite o seu peso em kg: "))

imc = peso / (altura ** 2)

print (f'Seu Imc é {imc:.2f}')