#Leia 5 números e mostre quantos são negativos.
count_negativos = 0
for i in range(5):
    num = int(input("Digite um número: "))
    if num < 0:
        count_negativos += 1
print(f"Quantidade de números negativos: {count_negativos}")
print("FIM!")