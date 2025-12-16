from django.urls import path
from . import views

urlpatterns = [
    path('', views.suporte, name= 'suporte'),
]
