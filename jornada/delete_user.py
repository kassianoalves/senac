#!/usr/bin/env python
import os
import sys
import django
from django.conf import settings

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jornada.settings')
django.setup()

from django.contrib.auth.models import User

if len(sys.argv) != 2:
    print("Uso: python delete_user.py <username>")
    sys.exit(1)

username = sys.argv[1]

try:
    user = User.objects.get(username=username)
    user.delete()
    print(f"Usuário '{username}' foi excluído com sucesso.")
except User.DoesNotExist:
    print(f"Usuário '{username}' não encontrado.")
except Exception as e:
    print(f"Erro ao excluir usuário: {e}")
