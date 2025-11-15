nome = 'Elias'
print('Olá, mundo!', nome)
print(f'Olá, mundo! {nome}')

#comentario de uma linha
'''comentario
de  muitas
linhas'''

# Exemplo de regra de três simples (proporção direta)
def regra_de_tres_direta(a, b, c):
  """Calcula a regra de três para grandezas diretamente proporcionais."""
  if a == 0:
    return "Divisão por zero não é permitida"
  return (b * c) / a

# Exemplo de regra de três simples (proporção inversa)
def regra_de_tres_inversa(a, b, c):
  """Calcula a regra de três para grandezas inversamente proporcionais."""
  if c == 0:
    return "Divisão por zero não é permitida"
  return (a * b) / c

# Exemplo de uso:
# Se 5 baldes possuem 12 litros, 3 baldes terão quantos litros? (Proporção direta)
# a=5, b=12, c=3
resultado_direta = regra_de_tres_direta(5, 12, 3)
print(f"Resultado (Direta): {resultado_direta} litros")

# Se 200g de ração duram 10 dias, quantos dias durarão 500g? (Proporção direta)
# a=200, b=10, c=500
resultado_direta_2 = regra_de_tres_direta(200, 10, 500)
print(f"Resultado (Direta 2): {resultado_direta_2} dias")

# Se 200g de ração duram 10 dias, quantos dias durarão 50g? (Proporção inversa)
# a=200, b=10, c=50
resultado_inversa = regra_de_tres_inversa(200, 10, 50)
print(f"Resultado (Inversa): {resultado_inversa} dias")


nome = "Alexander"
print(nome[:4])
if (nome[:4]) == "Alex":
	print('Nome contém Alex')