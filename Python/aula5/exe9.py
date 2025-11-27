#    Crie uma função para receber o valor e o desconto sobre um produto, e calcular o valor a ser pago 
#    pelo produto considerando o desconto.
def valor_desconto(valor, desconto):
    valor_final = valor - (valor * desconto / 100)
    return valor_final
# Exemplo de uso da função
preco = float(input("Digite o valor do produto: R$ "))
desconto = float(input("Digite o desconto (%): "))
valor_a_pagar = valor_desconto(preco, desconto)
print(f"O valor a ser pago pelo produto é: R$ {valor_a_pagar:.2f}")
