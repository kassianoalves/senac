
class Funcionario:
    def __init__(self, nome: str, valor_hora: float, horas_trabalhadas: int):
        self.nome = nome
        self.valor_hora = valor_hora
        self.horas_trabalhadas = 0
    def calcular_salario(self):
        return self.valor_hora * self.horas_trabalhadas
    def registrar_horas(self, horas: int):
        self.horas_trabalhadas += horas
        print(f'Horas trabalhadas atualizadas: {self.horas_trabalhadas} horas.')
    