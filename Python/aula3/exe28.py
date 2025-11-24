# Leia 15 números e mostre quantos estão entre 10 e 20 (inclusive) e quantos estão fora desse intervalo.
contador_dentro = 0
contador_fora = 0
for i in range(15):
    num = int(input("Digite um número: "))
    if 10 <= num <= 20:
        contador_dentro += 1
    else:
        contador_fora += 1
print(f"Quantidade de números dentro do intervalo: {contador_dentro}")
print(f"Quantidade de números fora do intervalo: {contador_fora}")
print("FIM!")