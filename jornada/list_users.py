#!/usr/bin/env python
import os
import django
from django.conf import settings

# Configure Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jornada.settings')
django.setup()

from django.contrib.auth.models import User

users = User.objects.all()
print('Usuários no banco de dados:')
for u in users:
    print(f'ID: {u.id}, Username: {u.username}')
