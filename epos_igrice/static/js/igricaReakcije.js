document.getElementById("btn").disabled = true; 
let popup = document.getElementById("popup");
let forma_vreme = document.getElementById("id_vreme")
let naslov_rez = document.getElementById("naslov_rez")


function cekanjeCrvene(){
    document.getElementById('tekst').innerHTML = "Sacekajte crvenu pozadinu";
    odbrojavanje();
}

function odbrojavanje(){
    setInterval(function(){
        document.getElementById('igra').style.backgroundColor = '#b61924';
        stoperica();
    }, (Math.random()*10000));

    brojanje();
}

var brojac = 0;

function brojanje(){
    document.getElementById("btn").disabled = false; 
    setInterval(brojac++, 100);    
}

document.getElementById('igra').addEventListener("click", cekanjeCrvene);

var miliSekunde = 0;

function povecajMiliSekunde(){
    miliSekunde = miliSekunde + 1;
}
function stoperica(){
    
    setInterval(povecajMiliSekunde, 1);

    
}

function stop(){
    // alert('Vas rezultat: ' + miliSekunde);
    document.getElementById("btn").disabled = true; 

    naslov_rez.innerHTML = "Vaš rezultat: "+miliSekunde
    forma_vreme.value = miliSekunde;

    forma_vreme.style.display = "none";
    labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
      const lab = labels[i];
      lab.style.display = "none";
    }


}
