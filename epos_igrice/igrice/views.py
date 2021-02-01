from django.shortcuts import render, redirect
from .models import *
from .forms import *


def pocetna(request):

    return render(request,'igrice/pocetna.html')

def memorije(request):

    if request.method == 'POST':
        form = RezulatForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pocetna')
    else:
        form = RezulatForm()

    context = {'form':form}

    return render(request,'igrice/memorije.html', context)

def rezultati(request):

    rezultati = Igrica.objects.all()
    context = {'rezultati': rezultati}

    return render(request, 'igrice/rezultati.html')