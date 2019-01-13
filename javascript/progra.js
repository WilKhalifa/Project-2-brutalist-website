let cube = document.getElementsByClassName('cube');
let day1 = document.getElementById("day1-row1");
let day2 = document.getElementById("day2-row1");
let day3 = document.getElementById("day3-row1");
let menu = document.getElementById("menu");
let showClass = "show-front";
let currentClass = "";
let faceP = document.getElementById("faceP");
let faceU = document.getElementById("faceU");
let faceE = document.getElementById("faceE");
let faceUP = document.getElementById("faceUP");
let faceEE = document.getElementById("faceEE");
let faceNone = document.getElementsByClassName("face-none");
let menuLeftM = document.getElementById("menu-left-M");
let menuLeftMM = document.getElementById("menu-left-MM");
let menuLeftE = document.getElementById("menu-left-E");
let menuLeftS = document.getElementById("menu-left-S");
let menuLeftH = document.getElementById("menu-left-H");
let menuLeftO = document.getElementById("menu-left-O");
let menuLeftM3 = document.getElementById("menu-left-M3");
let menuLeftI = document.getElementById("menu-left-I");
let menuLeftN = document.getElementById("menu-left-N");
let menuLeftF = document.getElementById("menu-left-F");

function removeCLass(elt, face) {
  while (elt.classList.length > 2) {
    elt.classList.remove(elt.classList.item(1));
  }
}

menu.addEventListener('click', function() {
  showClass = 'show-left';
  let elementCurrent
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if (elementCurrent.classList.contains(currentClass)) {
      removeCLass(elementCurrent, currentClass);
    };
    cube[i].classList.add(showClass);
    currentClass = showClass;
  }
}, false);

day1.addEventListener('click', function() {
  showClass = 'show-right';
  let elementCurrent
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if (elementCurrent.classList.contains(currentClass)) {
      removeCLass(elementCurrent, currentClass);
    }
    cube[i].classList.add(showClass);
    currentClass = showClass;
  }
}, false);

day2.addEventListener('click', function() {
  showClass = 'show-top';
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if (elementCurrent.classList.contains(currentClass)) {
      removeCLass(elementCurrent, currentClass);
    }
    cube[i].classList.add(showClass);
    currentClass = showClass;
  }
}, false);

day3.addEventListener('click', function() {
  showClass = 'show-back';
  for (var i = 0; i < cube.length; i++) {
    elementCurrent = cube[i]
    if (elementCurrent.classList.contains(currentClass)) {
      removeCLass(elementCurrent, currentClass);
    }
    cube[i].classList.add(showClass);
    currentClass = showClass;
  }
}, false);



let progLetter = document.getElementById("input-prog");
let homeLetter = document.getElementById("input-home");
let infosLetter = document.getElementById("input-infos");

homeLetter.addEventListener("keydown", function(e) {
  if (e.key === "e") {
    document.location.assign("index.html")
  }
}, false);

progLetter.addEventListener("keydown", function(e) {
  if (e.key === "a") {
    document.location.assign("programmation.html")
  }
}, false);

infosLetter.addEventListener("keydown", function(e) {
  if (e.key === "o") {
    document.location.assign("infos.html")
  }
}, false);


//Responsive

if (document.documentElement.clientWidth < 768) {
  faceP.textContent = "Q";
  faceU.textContent = "U";
  faceE.textContent = "E";
  faceH.textContent = "H";
  faceUP.textContent = "P";
  faceEE.textContent = "E"
  menuLeftM.textContent = "M";
  menuLeftMM.textContent = "M";
  menuLeftE.textContent = "E";
  menuLeftS.textContent = "S";
  menuLeftH.textContent = "H";
  menuLeftO.textContent = "O";
  menuLeftM3.textContent = "M";
  menuLeftI.textContent = "I";
  menuLeftN.textContent = "N";
  menuLeftF.textContent = "F";
};

for (var i = 0; i < faceNone.length; i++) {
  if (document.documentElement.clientWidth < 768) {
    faceNone[i].textContent = "";
  };
};


//map interactive

/*[
  {
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#0a00ff"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#2800ff"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#cccfdc"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a4afe4"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#a4afe4"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a4afe4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#918cf1"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#0a00ff"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#534dea"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#534dea"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e6e9f6"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#183dee"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#183dee"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8b98d3"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c0b5f9"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#837ff2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#879bf7"
      }
    ]
  }
]*/
