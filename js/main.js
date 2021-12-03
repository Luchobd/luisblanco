/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

/*Agregar la clase SHOW*/
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
/*HIDDEN*/
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remove menu mobile
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ===== BOTON DARK/LIGHT =====  */
const btnSwitch = document.querySelector("#switch");
const path = document.querySelector("#path");

// toggle() = esto significa que sino tiene una clase se la va a colocar y si ya la tiene se la va a quitar
btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  /* ========== ACTUALIZAR Y NO QUITAR MODO DARK =========== */
  /* Utilizamos "localStorage" para guardar la configuracion del modo dark */
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

// Obtener el modo actual.
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
  btnSwitch.classList.remove("active");
}

// localStorage: es un pequeño almacenamiento que va quedar en el computador de quien este utilizando la pagina

/* ======= MULTIPLES IDIOMAS // English to Spanish ======== */
const check = document.querySelector("#check");

check.addEventListener("click", () => {
  let id = check.checked;
  if (id == true) {
    location.href = "es/index.html";
  } else {
    location.href = "../index.html";
  }
});
