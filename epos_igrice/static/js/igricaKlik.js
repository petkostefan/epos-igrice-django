document.getElementById('start').addEventListener("click", odbrojavanje);
//document.getElementById('start').addEventListener("click", brojanje);
let popup = document.getElementById("popup");
let forma_klikovi = document.getElementById("id_klikovi")
let naslov_rez = document.getElementById("naslov_rez")
var sekunde = 10;
var brojac = 0;
document.getElementById("btn").disabled = true; 


function odbrojavanje(){
    document.getElementById("start").disabled = true; 
    document.getElementById("btn").disabled = false; 
    setInterval( function(){
        sekunde--;
            
        if(sekunde >= 0){
            document.getElementById('brSek').innerHTML = sekunde;
            
        }
            
        if(sekunde === 0){
            document.getElementById('s').innerHTML = "";
            document.getElementById('vreme').innerHTML = "";
            document.getElementById('brSek').innerHTML = "Vreme je isteklo";
            // alert("Vas rezultat je " + (funkcijaBrojanja()-1));
            document.getElementById("btn").disabled = true; 

            naslov_rez.innerHTML = "Vaš rezultat: "+brojac;
            forma_klikovi.value = brojac;
        
            forma_klikovi.style.display = "none";
            labels = document.getElementsByTagName("label");
            for (let i = 0; i < labels.length; i++) {
              const lab = labels[i];
              lab.style.display = "none";
            }
        
            popup.style.display = "flex";
         }
     }, 1000);
}

var funkcijaBrojanja = (function () {

    return function () {return brojac += 1;}
})();

function brojanje(){
    document.getElementById('broj').innerHTML = funkcijaBrojanja();
}
