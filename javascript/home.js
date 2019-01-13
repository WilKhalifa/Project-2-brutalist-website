let rowArray = document.getElementsByClassName("row-translate");
//fonction qui génère aléatoirement une vitesse au row des textes
let randomDuration = 0;
for (var i = 0; i < rowArray.length; i++) {
  randomDuration = Math.random() * (15 - 9) + 9;

  rowArray[i].style.animation = randomDuration + "s infinite linear hoverSlide";
};

//écouteur d'évènement pour le hover de la page programmation
let navImg = document.getElementById("nav-img");
let progCtn = document.getElementById("prog-ctn")

navImg.addEventListener("mouseover", function() {
  progCtn.style.display = "inline"
}, false);

navImg.addEventListener("mouseout", function() {
progCtn.style.display = "none"
}, false);

//écouteur d'évènement pour le hover de la page infos-pratiques
let navImg3 = document.getElementById("nav-img3");
let progInfos = document.getElementById("infos-ctn")

navImg3.addEventListener("mouseover", function(){
  progInfos.style.display = "inline"
}, false);

navImg3.addEventListener("mouseout", function() {
  progInfos.style.display = "none";
}, false);
