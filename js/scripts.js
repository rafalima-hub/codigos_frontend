/* 
js/scripts.js
JavaScript do tamplate */

/* Recebe uma variável do HTML */ 
if (typeof pageName === undefined) {
    console.log("Ajuste o JavaScript dess página!")
} else {
    console.log(pageName)
}


const myLogo = document.getElementById('myLogo')
// console.log(myLogo)
myLogo.addEventListener("clikc", function () {
    alert("Por que clicou aqui?")
});

/********************
 * Aviso de cookies *
 ********************/

const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");

// Verifica se o usuário já aceitou os cookies
if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
}

// Botão "Aceitar"
cookieAccept.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
});