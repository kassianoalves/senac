#Leia vários nomes até digitar “sair”, e conte quantos foram digitados (no total).
count_nomes = 0
while True:
    nome = input("Digite um nome (ou 'sair' para encerrar): ")
    if nome.lower() == 'sair':
        break
    count_nomes += 1
print(f"Foram digitados {count_nomes} nomes.")
print("FIM!")