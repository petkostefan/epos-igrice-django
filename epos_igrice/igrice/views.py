from django.shortcuts import render, redirect
from .models import *
from .forms import *


def pocetna(request):

    return render(request,'igrice/pocetna.html')

def memorije(request):

    if request.method == 'POST':
        form = MemorijaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('rezultati')
    else:
        form = MemorijaForm()

    context = {'form':form}

    return render(request,'igrice/memorije.html', context)

def reakcija(request):

    if request.method == 'POST':
        form = ReakcijaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('rezultati')
    else:
        form = ReakcijaForm()

    context = {'form':form}

    return render(request,'igrice/igricaReakcije.html', context)

def brzina(request):

    if request.method == 'POST':
        form = BrzinaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('rezultati')
    else:
        form = BrzinaForm()

    context = {'form':form}

    return render(request,'igrice/igricaKlik.html', context)

def rezultati(request):

    memorije = IgricaMemorije.objects.order_by('vreme', 'pokusaji')[:10]
    reakcija = IgricaReakcije.objects.order_by('vreme')[:10]
    brzina = IgricaBrzine.objects.order_by('-klikovi')[:10]


    context = {'memorije': memorije, 'reakcija':reakcija, 'brzina':brzina}

    return render(request, 'igrice/rezultati.html', context)

def upitnik(request):

    if request.method == 'POST':
        form = UpitnikForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pocetna')
    else:
        form = UpitnikForm()

    context = {'form':form}

    return render(request,'igrice/upitnik.html', context)