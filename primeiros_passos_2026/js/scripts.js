/* JavaScript do tamplate */

if (pageName) {
    console.log(pageName)
}
console.log("Ajuste o JavaScript dess página!")

const myLogo = document.getElementsById('myLogo')
// console.log(myLogo)
myLogo.addEventListener("clikc", function () {
    alert("Por que clicou aqui?")
});