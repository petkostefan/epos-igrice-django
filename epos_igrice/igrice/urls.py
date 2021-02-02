from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', views.pocetna, name='pocetna'),
    path('memorije/', views.memorije, name='memorije'),
    path('reakcija/', views.reakcija, name='reakcija'),
    path('brzina/', views.brzina, name='brzina'),
    path('upitnik/', views.upitnik, name='upitnik'),
    path('rezultati/', views.rezultati, name='rezultati'),
]