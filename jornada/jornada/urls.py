from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home.urls')),
    path('home/', include('home.urls')),
    path('blog/', include('blog.urls')),
    path('destinos/', include('destinos.urls')),
    path('cadastro/', include('cadastro.urls')),
    path('fotos/', include('fotos.urls')),
]
