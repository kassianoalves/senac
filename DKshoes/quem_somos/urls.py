from django.urls import path
from . import views

urlpatterns = [
    path('', views.quem_somos, name= 'quem_somos'),
]
