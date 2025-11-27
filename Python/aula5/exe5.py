#Crie uma função cumprimentar que receba o nome e a hora do dia, e retorne uma mensagem personalizada. Bom dia, Boa tarde ou Boa noite. 
def cumprimentar(nome, hora):
    if 5 <= hora <12:
        saudacao = "Bom dia"
    elif 12 <= hora <18:
        saudacao = "Boa tarde"
    else:
        saudacao = "Boa noite"
    return f"{saudacao}, {nome}!"

nome = input("Digite seu nome: ")
hora = int(input("Digite a hora atual (0-23): "))

print(cumprimentar(nome, hora))