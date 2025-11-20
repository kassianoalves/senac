#Escreva um programa para ler o salário e o sexo de vários funcionários (defina uma cláusula para terminar a leitura) ao término, informar a média de salário de homens e mulheres 
homem = 0
mulher = 0
salarioH = 0
salarioM = 0
funcionario = int(input('Quantos funcionarios tem sua empresa'))
somaH = 0
somaM = 0
i=0
while i < funcionario:
    sexo = input('homem ou mulher?')
    if sexo == 'homem' :
      contaH = int(input('Qual salario dele?'))
      somaH +=contaH
      homem+=1
    else:
      contaM = int(input('Qual salario dela?'))
      mulher+=1
      somaM +=contaM
    i+=1
print(f'Homens totais: {homem}')
print(f'Mulheres totais: {mulher}')
print(f'Salario total dos homens: {somaH}')
print(f'Salario total das mulheres: {somaM}')
print(f'A media salarial dos homens: {somaH/homem}')
print(f'A media salarial das mulheres: {somaM/mulher}')