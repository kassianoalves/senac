#Solicite números até o usuário digitar 999 e informe o menor digitado 

menor = None
while True:
    numero = int(input("Digite um número (ou 999 para encerrar): "))
    if numero == 999:
        break
    if menor is None or numero < menor:
        menor = numero
print(f"O menor número digitado foi: {menor}")
print("FIM!")