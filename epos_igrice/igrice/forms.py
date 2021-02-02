from django.forms import ModelForm
from .models import *

class MemorijaForm(ModelForm):

    class Meta:
        model = IgricaMemorije
        fields = '__all__'

class UpitnikForm(ModelForm):
    
    class Meta: 
        model = Upitnik
        fields = '__all__'

class ReakcijaForm(ModelForm):
    
    class Meta: 
        model = IgricaReakcije
        fields = '__all__'

class BrzinaForm(ModelForm):
    
    class Meta: 
        model = IgricaBrzine
        fields = '__all__'
