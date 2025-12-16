
from django.shortcuts import render

# Create your views here.
def outlet(request):
    return render(
        request,
        'outlet/index.html'
    )