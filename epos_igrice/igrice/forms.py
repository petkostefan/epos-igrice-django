from django.forms import ModelForm
from .models import *

class RezulatForm(ModelForm):

    class Meta:
        model = IgricaMemorije
        fields = '__all__'

class UpitnikForm(ModelForm):
    
    class Meta: 
        model = Upitnik
        fields = '__all__'
