#Leia 8 números e encontre o maior deles.
maior = None
for i in range(8):
    num = int(input("Digite um número: "))
    if maior is None or num > maior:
        maior = num
print(f"O maior número digitado foi: {maior}")