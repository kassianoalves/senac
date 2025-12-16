from django.shortcuts import render
from login.models import Pessoa

# Create your views here.
def login(request):
    contexto = {
        'title' : 'DK Shoes | Login',
        'mensagem': 'Você fez Login em DK Shoes'
    }
    return render(
        request,
        'login/index.html',
        contexto,
    )

def gravar(request):
    #Salvar os dados para tabela
    nova_pessoa = Pessoa()
    nova_pessoa.nome = request.POST.get('nome')
    nova_pessoa.idade = request.POST.get('idade')
    nova_pessoa.email = request.POST.get('email')
    nova_pessoa.save()
    
    return login(request)

def exibe(request):
    #exibir todas as pessoas
    exibe_pessoas = {
        'pessoas': Pessoa.objects.all()
    }
#Retornar os dados para a página
    return render(
    request,
    'login/mostrar.html',
    exibe_pessoas,
)
