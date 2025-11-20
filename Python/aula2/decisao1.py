#forma abreviada
a = 2
b = 330
print("A") if a > b else print("B")

#forma abreviada com mais de 2 condiçoes
a = 330
b = 330
print("A") if a > b else print("=") if a == b else print("B")

#forma normal
if a > b:
    print('A')
else:
    print('B')