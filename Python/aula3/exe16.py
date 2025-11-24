#Ler 6 idades e dizer quantas são maiores ou iguais a 18.
maior = 0
for c in range(1, 7):
    idade = int(input(f"Digite a idade da {c}ª pessoa: "))
    if idade >= 18:
        maior += 1
print(f"Ao todo tivemos {maior} pessoas maiores de idade.")
print("FIM!")