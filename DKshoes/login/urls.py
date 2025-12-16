from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('gravar/', views.gravar, name='gravar'),
    path('mostrar/', views.exibe, name='mostrar'),
]
