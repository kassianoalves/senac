#Leia números até digitar 0 e exiba quantos são pares e quantos são ímpares (não incluindo o zero).
contador_pares = 0
contador_impares = 0
while True:
    num = int(input("Digite um número (ou 0 para encerrar): "))
    if num == 0:
        break
    if num % 2 == 0:
        contador_pares += 1
    else:
        contador_impares += 1
print(f"Quantidade de números pares: {contador_pares}")
print(f"Quantidade de números ímpares: {contador_impares}")
print("FIM!")