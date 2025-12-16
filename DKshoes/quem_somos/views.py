from django.shortcuts import render

# Create your views here.
def quem_somos(request):
    return render(
        request,
        'quem_somos/index.html'
    )