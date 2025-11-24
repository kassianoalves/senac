#Exiba a soma de todos os números pares entre 1 e 100. 
soma_pares = 0
for num in range(1, 101):
    if num % 2 == 0:
        soma_pares += num
print(f"A soma dos números pares de 1 a 100 é: {soma_pares}")
print("FIM!")