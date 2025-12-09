from django.shortcuts import render

# Create your views here.
# Criacao e funcoes de visualizaçao

def home(request):
    return render(
        request,
        'home/index.html'
    )