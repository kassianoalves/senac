#Peça um número e exiba todos números ímpares até ele.
num = int(input("Digite um número: "))  
for i in range(1, num + 1, 2):
    print(i)
print("FIM!")