# Receba notas até o usuário digitar -1 e calcule a média 
# das notas válidas (de 0 a 10).
soma = 0
contador = 0
while True:
    nota = float(input("Digite uma nota (ou -1 para encerrar): "))
    if nota == -1:
        break
    if 0 <= nota <= 10:
        soma += nota
        contador += 1
    else:
        print("Nota inválida. Por favor, digite uma nota entre 0 e 10.")
if contador > 0:
    media = soma / contador
    print(f"A média das notas válidas é: {media}")
else:
    print("Nenhuma nota válida foi digitada.")
print("FIM!")