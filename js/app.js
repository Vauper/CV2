//PWA en base a: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#what-is-a-progressive-web-app

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/CV/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}


//Modo Oscuro y Claro en base a https://www.youtube.com/watch?v=wodWDIdV9BY

let modoOscuro = localStorage.getItem("modoOscuro");
const botonModoOscuro = document.querySelector("#boton-modo-oscuro");
let modoImagen = document.getElementsByClassName("imgbase");
const sol = document.getElementById("sol");
const luna = document.getElementById("luna");

const habilitarModoOscuro = function() {
  document.body.classList.add("modoOscuro");
  sol.style.display = "block";
  luna.style.display = "none";
  for(i = 0; i < modoImagen.length; i++) {
    modoImagen[i].style.filter = "invert(0)";
  };
  localStorage.setItem("modoOscuro","habilitado")
};

const deshabilitarModoOscuro = function() {
  document.body.classList.remove("modoOscuro");
  luna.style.display = "block";
  sol.style.display = "none";
for(i = 0; i < modoImagen.length; i++) {
    modoImagen[i].style.filter = "invert(1)";
  };
  localStorage.setItem("modoOscuro",null)
};

if (modoOscuro === "habilitado") {
  habilitarModoOscuro();
  sol.style.display = "block";
  luna.style.display = "none";
} else {
  luna.style.display = "block";
  sol.style.display = "none";
};

botonModoOscuro.addEventListener("click",function(){
  modoOscuro = localStorage.getItem("modoOscuro");
  if (modoOscuro !== "habilitado") {
    habilitarModoOscuro();
  } else {
    deshabilitarModoOscuro();
  }
});

/* Barra de navegacion en a base a: https://www.youtube.com/watch?v=HbBMp6yUXO0 */

const navBar = document.querySelector(".navbar");
const botonMenu = document.querySelector(".menu");
const elementStyle = document.querySelector(".menu").style;

botonMenu.addEventListener("click", function(){
    
    const visibility = navBar.getAttribute("data-visible");
    if (visibility === "false") {
        navBar.setAttribute("data-visible",true);
        elementStyle.position = "fixed";
    } else {
        navBar.setAttribute("data-visible",false);
        elementStyle.position = "absolute";
    }
});

/* esconder la barra de navegación al hacer scroll down https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    
    document.getElementById("header").style.top = "0";
    if (currentScrollPos === 0) {
      document.getElementById("header").style.backgroundColor = "transparent";
    } else {
    document.getElementById("header").style.backgroundColor = "var(--clr-primario)";
    }
    

  } else {
    document.getElementById("header").style.top = "-121px";
    
  }
  prevScrollpos = currentScrollPos;
};


function mostrarSolapaTrabajo(trabajo) {
    var i;
    var x = document.getElementsByClassName("trabajo");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(trabajo).style.display = "grid";
};

document.getElementById("boton_credil").addEventListener("click", function () {
    mostrarSolapaTrabajo('credil');
});

document.getElementById("boton_musimundo").addEventListener("click", function () {
    mostrarSolapaTrabajo('musimundo');
});

document.getElementById("boton_turismo").addEventListener("click", function(){
    mostrarSolapaTrabajo('turismo');
});
document.getElementById("boton_mastermed").addEventListener("click", function(){
    mostrarSolapaTrabajo('mastermed');
});
document.getElementById("boton_voluntario").addEventListener("click", function(){
    mostrarSolapaTrabajo('voluntario');
});

/* darle la clase "activo" a los botones de la galería https://www.w3schools.com/howto/howto_js_active_element.asp */


var navTrabajo = document.getElementById("naviTrabajo");

var botones = navTrabajo.getElementsByClassName("botonSolapaTrabajo");

for (var a = 0; a < botones.length; a++) {
  botones[a].addEventListener("click", function() {
    var current = document.getElementsByClassName("botonActivo");
    current[0].className = current[0].className.replace(" botonActivo", "");
    this.className += " botonActivo";
  });
} 

/*Acordeon https://www.w3schools.com/howto/howto_js_accordion.asp */

var acc = document.getElementsByClassName("acordeon");
var b;

for (b = 0; b < acc.length; b++) {
  acc[b].addEventListener("click", function() {
    this.classList.toggle("acordeonActivo");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};