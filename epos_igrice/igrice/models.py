from django.db import models


class IgricaMemorije(models.Model):

    IGRICE = (
    ('Memorija', 'Memorija'),
    ('Reakcija', 'Reakcija'),
    ('Brzina', 'Brzina'),
    )

    nick = models.CharField(max_length=30)
    pokusaji = models.IntegerField()
    vreme = models.FloatField()

    def __str__(self):
        return self.nick+' '+str(self.pokusaji)+' '+str(self.vreme)

    class Meta():
        verbose_name_plural = 'Igrice memorije'