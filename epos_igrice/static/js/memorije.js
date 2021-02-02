const cards = document.querySelectorAll(".flip-card-inner");

let okrenuta = false;
let zakljucano = false;
let prva, druga;
let rezultat = 0;
let pokusaji = 0;
let rez = document.getElementById("rezultat");
let pok = document.getElementById("pokusaji");
let popup = document.getElementById("popup");
let forma_vreme = document.getElementById("id_vreme")
let forma_pokusaji = document.getElementById("id_pokusaji")
let naslov_rez = document.getElementById("naslov_rez")
let timer_started = false
let start

// Random
for(var i = 0; i < cards.length; i++){
  var target = Math.floor(Math.random() * cards.length -1) + 1;
  var target2 = Math.floor(Math.random() * cards.length -1) +1;
  cards[target].before(cards[target2]);
}

function okreni() {
  if (!timer_started){
    start = Date.now();
    timer_started = true
  }
  if (zakljucano) return;
  if (this === prva) return;

  this.classList.add('okreni');

  if (!okrenuta) {
    okrenuta = true;
    prva = this;
    return;
  }

  druga = this;
  zakljucano = true;

  proveri();
}

function proveri() {
  pokusaji++;
  pok.innerHTML = "  Broj pokušaja: "+pokusaji;
  let jednake = prva.id == druga.id;
  jednake ? zakljucaj() : vratiNaPocetno();
}

function zakljucaj() {
  prva.removeEventListener('click', okreni);
  druga.removeEventListener('click', okreni);

  // Blurovanje
  prva.children[1].classList.add('pogodjen');
  druga.children[1].classList.add('pogodjen');
  rezultat++;
  rez.innerHTML = "Rezultat je: "+rezultat 

  resetBoard();
}

function vratiNaPocetno() {
  setTimeout(() => {
    prva.classList.remove('okreni');
    druga.classList.remove('okreni');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [okrenuta, zakljucano] = [false, false];
  [prva, druga] = [null, null];

  // Kraj
  if(rezultat==9){

    let vreme = Date.now() - start;
    vreme = Math.round(vreme/10)/100;
    naslov_rez.innerHTML = "Pobedili ste sa "+pokusaji+" pokusaja za "+vreme+" sekundi!"

    forma_vreme.value = vreme;
    forma_pokusaji.value = pokusaji;

    // Sklanjanje nepotrebnog u prikazivanju forme
    forma_vreme.style.display = "none";
    forma_pokusaji.style.display = "none";
    labels = document.getElementsByTagName("label");
    for (let i = 0; i < labels.length; i++) {
      const lab = labels[i];
      if(lab.innerHTML == "Pokusaji:" || lab.innerHTML == "Vreme:"){
        lab.style.display = "none";
      }
    }

    popup.style.display = "flex";
  }
}

cards.forEach(card => card.addEventListener('click', okreni));

function hide(){
  popup.style.display = "none";
}