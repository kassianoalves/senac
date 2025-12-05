#Criar uma classa para Temperatura com os atributos celsius e fahrenheit,
#e métodos para converter de Celsius para Fahrenheit Celsius para Kelvin.

class Temperatura:
    def __init__(self, celsius:float=0.0):
        self.celsius = celsius
        self.fahrenheit = self.celsius_para_fahrenheit(celsius)
    def celsius_para_fahrenheit(self, celsius:float) -> float:
        return (celsius * 9/5) + 32
    def celsius_para_kelvin(self, celsius:float) -> float:
        return celsius + 273.15
    
# Exemplo de uso da classe Temperatura
temp_c = float(input("Digite a temperatura em Celsius: "))
temperatura = Temperatura(temp_c)
temp_f = temperatura.celsius_para_fahrenheit(temp_c)
temp_k = temperatura.celsius_para_kelvin(temp_c)
print(f'Temperatura em Fahrenheit: {temp_f:.2f} °F')
print(f'Temperatura em Kelvin: {temp_k:.2f} K')
