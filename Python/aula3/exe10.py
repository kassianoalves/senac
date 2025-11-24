# Leia o salario e o sexo de n funcionários, e ao final informe: 
#- qtd de funcionários de cada sexo 
#- a soma do salário das mulheres 
#- a soma do salário dos homens 
#- a média salarial dessa empresa 
#- o programa termina quando for digitado "fim"

homem = 0
mulher = 0
salarioH = 0
salarioM = 0
somaH = 0
somaM = 0
i=0
while True:
    sexo = input('homem ou mulher? (ou digite "fim" para terminar)')
    if sexo == 'fim':
        break
    if sexo == 'homem' :
      contaH = int(input('Qual salario dele?'))
      somaH +=contaH
      homem+=1
    elif sexo == 'mulher':
      contaM = int(input('Qual salario dela?'))
      mulher+=1
      somaM +=contaM
    else:
      print('Sexo inválido, por favor digite "homem", "mulher" ou "fim".')
    i+=1
print(f'Homens totais: {homem}')
print(f'Mulheres totais: {mulher}')
print(f'Salario total dos homens: {somaH}')
print(f'Salario total das mulheres: {somaM}')
total_funcionarios = homem + mulher
total_salario = somaH + somaM
media_salarial = total_salario / total_funcionarios
print(f'A média salarial da empresa: {media_salarial}')


