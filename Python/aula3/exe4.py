#4. Solicite ao usuário 5 números e exiba a soma total, usando um loop
i=0
soma=0
while i<5:
  solicita=int(input('Digite 5 numeros'))
  soma+= solicita
  i+=1
print(f'Soma total: {soma}')