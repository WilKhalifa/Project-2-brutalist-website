//page infos-pratique

let cubeInfos = document.getElementById("cube-infos");
let name = document.getElementById("name");
let firstName = document.getElementById("prenom");
let mail = document.getElementById("mail");
let map = document.getElementById("map");
let button = document.getElementById("button")
let champText = document.getElementById("champ-text");
let show2Class = "show2-front";
let current2Class = "";

name.addEventListener('click', function () {
  show2Class = 'show2-left';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );

firstName.addEventListener('click', function () {
  show2Class = 'show2-right';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );

mail.addEventListener('click', function () {
  show2Class = 'show2-top';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );

map.addEventListener('click', function () {
  show2Class = 'show2-front';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );

champText.addEventListener('click', function () {
  show2Class = 'show2-bottom';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );

button.addEventListener('click', function () {
  show2Class = 'show2-back';
    if (current2Class) {
    cubeInfos.classList.remove(current2Class);
    }
  cubeInfos.classList.add(show2Class);
  current2Class = show2Class;
}, false );
