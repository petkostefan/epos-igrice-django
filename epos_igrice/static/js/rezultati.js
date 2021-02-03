let naslov = document.getElementById("naslov");
let mem = document.getElementById("memorije");
let reak = document.getElementById("reakcija");
let brz = document.getElementById("brzina");

reak.style.display = "none";
brz.style.display = "none";

function memorije(){
    naslov.innerHTML = "Igrica memorije top 10"
    reak.style.display = "none";
    brz.style.display = "none";
    mem.style.display = "table"
}

function brzina(){
    naslov.innerHTML = "Igrica brzine top 10"
    reak.style.display = "none";
    mem.style.display = "none";
    brz.style.display = "table"
}

function reakcija(){
    naslov.innerHTML = "Igrica reakcije top 10"
    brz.style.display = "none";
    mem.style.display = "none";
    reak.style.display = "table"
}
