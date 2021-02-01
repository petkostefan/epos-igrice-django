from django.urls import path
from .views import *
from . import views

urlpatterns = [
    path('', views.pocetna, name='pocetna'),
    path('memorije/', views.memorije, name='memorije'),
    path('reakcija/', views.pocetna, name='reakcija'),
    path('brzina/', views.pocetna, name='brzina'),
    path('upitnik/', views.pocetna, name='upitnik'),
    path('rezultati/', views.rezultati, name='rezultati'),

]