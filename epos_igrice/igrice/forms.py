from django.forms import ModelForm
from .models import *

class RezulatForm(ModelForm):
    
    class Meta:
        model = IgricaMemorije
        fields = '__all__'