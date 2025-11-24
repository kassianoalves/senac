# Conte quantas vogais há em uma palavra 
palavra = input("Digite uma palavra: ").lower()
vogais = "aeiou"
contador = 0
for letra in palavra:
    if letra in vogais:
        contador += 1
print(f"A palavra '{palavra}' contém {contador} vogais.")
print("FIM!")