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
funcionario = int(input('Quantos funcionarios tem sua empresa'))
media = 0
i=0
while i < funcionario:
    sexo = input('homem ou mulher?')
    if sexo == 'homem' :
      contaH = int(input('Qual salario dele?'))
      salarioH+=contaH
      media += contaH
      homem+=1
    else:
      contaM = int(input('Qual salario dela?'))
      salarioM+=contaM
      media += contaM
      mulher+=1
    i+=1

print(f'Homens: {homem}  Salario: {salarioH}')
print(f'Homens: {mulher} Salario: {salarioM}')
print(f'Media Salaria da Empresa: {media/funcionario}')
