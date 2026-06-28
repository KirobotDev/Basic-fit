let nva = document.getElementById("nva")
let nvb = document.getElementById("nvb")
let btnbf = document.getElementById("btnbf")
let gnow = document.getElementById("gonow")
let jn = document.getElementById("join")

nva.addEventListener('click', (e) => {
    window.location = ("index")
})

nvb.addEventListener('click', (e) => {
    window.location = ("train")
})

btnbf.addEventListener('click', (e) => {
    window.location = ("index")
})

gnow.addEventListener('click', (e) => {
    window.open("https://earth.app.goo.gl/?apn=com.google.earth&isi=293622097&ius=googleearth&link=https%3a%2f%2fearth.google.com%2fweb%2fsearch%2fBasic-Fit,%2bRue%2bMarius%2bBerliet,%2bLyon%2f%4045.74093837,4.86281332,173.07913208a,0d,63.86762648y,206.57890497h,81.71961139t,0r%2fdata%3dCpIBGmQSXgolMHg0N2Y0ZWIzZTQ0NTcyZjBmOjB4ZTEzZThlMGRkMjI3NmJiZRn0my4w0N5GQCE5uqUwSnMTQCojQmFzaWMtRml0LCBSdWUgTWFyaXVzIEJlcmxpZXQsIEx5b24YASABIiYKJAngAquexeFGQBEroREFPeFGQBlNaO1e9F8TQCHUtMXoDlMTQEICCAEiGgoWQ1c2a1g4bGVJZ2x0WV9hTHM3MnJkQRACOgMKATBCAggASg0I____________ARAA")
})

join.addEventListener('click', (e) => {
    window.open("https://www.basic-fit.com/en-fr/checkout?stage=HomeClub")
})


function sauvegarder() {
  let selects = document.querySelectorAll("select");
  let time = document.querySelector("input[type='time']");

  let data = {
    jour: selects[0].value,
    parsemaine: selects[1].value,
    heure: time.value
  };

  localStorage.setItem("training", JSON.stringify(data));
}

function charger() {
  let data = JSON.parse(localStorage.getItem("training"));

  if (!data) return;

  console.log(data.jour);
  console.log(data.heure);
  console.log(data.parsemaine);
}

console.log(data.jour)