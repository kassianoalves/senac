#Leia 10 preços e diga qual o maior e o menor deles.
maior_preco = float('-inf')
menor_preco = float('inf')
for i in range(10):
    preco = float(input("Digite o preço do produto: "))
    if preco > maior_preco:
        maior_preco = preco
    if preco < menor_preco:
        menor_preco = preco
print(f"O maior preço é: R${maior_preco:.2f}")
print(f"O menor preço é: R${menor_preco:.2f}")
print("FIM!")