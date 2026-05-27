# Ecommerce Project
- Frontend 
    - React
- Backend
    - Django

- Create Two Folders `frontend` and `backend`
- navigate to backend folder
- execute `pip3 install django djangorestframework psycopg2-binary python-dotenv`
- execute `django-admin startproject backend .`
- execute `python manage.py startapp store`

#### frontend setup
- Go to frontend folder and install `npm create vite@latest .` 
- Register installed apps in backend settings.py file in INSTALLED_APPS
```'store',
   'rest_framework'
```
- Download postgresql windows version from [Postgresql](https://www.postgresql.org/download/windows/)
- need to create db in sql shell
- create env file and add db config variables 
```
DB_NAME=ecommerce_db
DB_USER=postgres
DB_PASSWORD=pwd
DB_HOST=localhost
DB_PORT=5432
```
- update db in settings.py at backend folder and add env config

```
from pathlib import Path
import os
from dotenv import load_dotenv
# Load environment variables from .env file 
load_dotenv()
```
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),
    }
}
```
- execute `python manage.py migrate`
- need to create superuser
- `python manage.py createsuperuser`
```
superusername:admin
email:admin@gmail.com
password:pwd
```
- run server `python manage.py runserver`
