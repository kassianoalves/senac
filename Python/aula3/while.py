i = 0
while i < 6:
    i += 1
    print(i)

#printar 6 numeros, começando pelo 0
for x in range(6):
  print(x)

#pra ir de 1 a 20, pulando de 2 em 2
for x in range(1,20,3):
  print(x)

else:
      print('Termino do for')
      
#--------------USO DE ARRAYS----------------
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)