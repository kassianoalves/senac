 #Escreva um programa que receba números inteiros do usuário até que um número negativo seja digitado. Exiba a soma de todos os números positivos digitados
soma_positivos = 0
print("Digite números inteiros. Digite um número negativo para parar e ver a soma dos números positivos.")

while True:
    try:
        entrada = input("Digite um número inteiro: ")
        numero = int(entrada)

        if numero < 0:
            print(f"Número negativo digitado. A soma de todos os números positivos é: {soma_positivos}")
            break
        elif numero > 0:
            soma_positivos += numero
            print(f"Número adicionado. Soma atual dos positivos: {soma_positivos}")
        else: # numero == 0
            print("Zero digitado. Não será adicionado à soma dos positivos.")

    except ValueError:
        print("Entrada inválida. Por favor, digite um número inteiro.")