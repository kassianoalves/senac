#Pergunte 10 números e conte quantos são múltiplos de 3
count_mult3 = 0
for i in range(10):
    num = int(input("Digite um número: "))
    if num % 3 == 0:
        count_mult3 += 1
print(f"Quantidade de múltiplos de 3: {count_mult3}")
print("FIM!")