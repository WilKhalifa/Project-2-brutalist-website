let cube = document.getElementsByClassName('cube');
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let menu = document.getElementById("menu");
let showClass = "show-front";
let currentClass = '';

menu.addEventListener( 'click', function () {
  showClass = 'show-left';
  let elementCurrent
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if ( currentClass ) {
    cube[i].classList.remove( currentClass );
    }
  cube[i].classList.add(showClass);
  currentClass = showClass;
}
}, false );

day1.addEventListener( 'click', function () {
  showClass = 'show-right';
  let elementCurrent
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if ( currentClass ) {
    cube[i].classList.remove( currentClass );
    }
  cube[i].classList.add(showClass);
  currentClass = showClass;
}
}, false );

day2.addEventListener( 'click', function () {
  showClass = 'show-top';
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if ( currentClass ) {
    cube[i].classList.remove( currentClass );
    }
  cube[i].classList.add(showClass);
  currentClass = showClass;
}
}, false );

day3.addEventListener( 'click', function () {
  showClass = 'show-back';
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if ( currentClass ) {
    cube[i].classList.remove( currentClass );
    }
  cube[i].classList.add(showClass);
  currentClass = showClass;
}
}, false );



let progLetter = document.getElementById("input-prog");
let homeLetter = document.getElementById("input-home");
let infosLetter = document.getElementById("input-infos");

homeLetter.addEventListener("keydown", function(e){
  if (e.key === "e") {
    document.location.assign("index.html")
  }
}, false);

progLetter.addEventListener("keydown", function(e){
  if (e.key === "a") {
    document.location.assign("programmation.html")
  }
}, false);

infosLetter.addEventListener("keydown", function(e){
  if (e.key === "o") {
    document.location.assign("infos.html")
  }
}, false);
