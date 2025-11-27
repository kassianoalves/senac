nota1 = float(input("Digite a primeira nota do aluno: "))
nota2 = float(input("Digite a segunda nota do aluno: "))
def notas (nota1, nota2):
    nota_media = (nota1 + nota2) / 2
    if nota_media >= 6:
        return "Aprovado"
    else:
        return "Reprovado"

print(notas(nota1, nota2))
