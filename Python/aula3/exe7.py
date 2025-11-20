#Leia o nome do time de 10 torcedores, e ao final informe quantos são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.

print("Vamos registrar os times de 10 torcedores.")

# Inicializa contadores para cada tipo de time
flamenguistas = 0
vascainos = 0
tricolores = 0  # Fluminense
botafoguenses = 0
outros = 0

# Loop para coletar o nome do time de 10 torcedores
for i in range(1, 11):
    time = input(f"Digite o nome do time do {i}º torcedor: ")
    time_lower = time.lower().strip() # Converte para minúsculas e remove espaços para facilitar a comparação

    if 'flamengo' in time_lower:
        flamenguistas += 1
    elif 'vasco' in time_lower:
        vascainos += 1
    elif 'fluminense' in time_lower or 'tricolor' in time_lower:
        tricolores += 1
    elif 'botafogo' in time_lower:
        botafoguenses += 1
    else:
        outros += 1

# Exibe os resultados finais
print("\n--- Resultado da Pesquisa --- ")
print(f"Flamenguistas: {flamenguistas}")
print(f"Vascaínos: {vascainos}")
print(f"Tricolores (Fluminense): {tricolores}")
print(f"Botafoguenses: {botafoguenses}")
print(f"Outros times: {outros}")