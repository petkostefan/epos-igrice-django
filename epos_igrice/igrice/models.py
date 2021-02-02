from django.db import models 
from django import forms


class IgricaMemorije(models.Model):

    nick = models.CharField(max_length=30, l)
    pokusaji = models.IntegerField()
    vreme = models.FloatField()

    def __str__(self):
        return self.nick+' '+str(self.pokusaji)+' '+str(self.vreme)

    class Meta():
        verbose_name_plural = 'Igrice memorije'

class Upitnik(models.Model):
    ime_i_prezime = models.CharField(max_length=40)
    email_adresa = models.EmailField(max_length=50)


    Igra_Iskustvo = (
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
    )
    Igra_memorije = models.CharField(choices=Igra_Iskustvo,max_length=20  )

    Igra_brzine = models.CharField(choices=Igra_Iskustvo,max_length=20)

    Igra_reakcije = models.CharField(choices=Igra_Iskustvo,max_length=20)

  
    Celokupno_Iskustvo = (
    ('Odlično', 'Odlično'),
    ('Dobro', 'Dobro'),
    ('Loše', 'Loše'),
    )

    iskustvo = models.CharField(choices=Celokupno_Iskustvo,max_length=20)

    Omiljena_Igra = (
    ('Igra Memorije', 'Igra Memorije'),
    ('Igre Reakcije', 'Igre Reakcije'),
    ('Igra Brzine', 'Igra Brzine'),
    )
    
    omiljena_igra = models.CharField(choices=Omiljena_Igra,max_length=20)

    Vaš_Utisak = models.TextField(max_length=300)
    
    def __str__(self):
        return self.ime_i_prezime

    class Meta():
        verbose_name_plural = 'Upitnici'
