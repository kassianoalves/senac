a = int(input("Digite um número: "))
b = int(input("Digite outro número: "))
c = int(input("Digite mais um número: "))

if a < b + c and b < a + c and c < a + b:
    print("Os números podem formar um triângulo.")
else:
    print("Os números não podem formar um triângulo.")