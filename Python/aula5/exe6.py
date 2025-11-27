#Implemente uma função que receba dois números e uma operação (+, -, *, /) e devolva o resultado. 
def calcular(num1, num2, operacao):
    if operacao == '+':
        return num1 + num2
    elif operacao == '-':
        return num1 - num2
    elif operacao == '*':
        return num1 * num2
    elif operacao == '/':
        if num2 != 0:
            return num1 / num2
        else:
            return "Erro: Divisão por zero"
    else:
        return "Erro: Operação inválida"
    
num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
operacao = input("Digite a operação (+, -, *, /): ")
operacao = calcular(num1, num2, operacao)
print(f"Resultado: {operacao:.0f}")