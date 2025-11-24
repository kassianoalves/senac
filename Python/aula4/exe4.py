#Dada a lista nums = [1, 2, 3, 4, 5, 6, 7, 8], crie uma nova lista somente com os números ímpares. 
nums = [1, 2, 3, 4, 5, 6, 7, 8]
impares = [num for num in nums if num % 2 != 0]
print(impares)