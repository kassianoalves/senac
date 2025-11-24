#Com a lista palavras = ["casa", "sol", "computador", "nuvem"], crie uma nova lista contendo somente as palavras com mais de 4 caracteres. 
palavras = ["casa", "sol", "computador", "nuvem"]
palavras_longas = [palavra for palavra in palavras if len(palavra) > 4]
print(palavras_longas)
