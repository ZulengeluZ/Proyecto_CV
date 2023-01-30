document.getElementById("Telefono").onclick = function() {
    console.log("capturamos el evento onmouseover")
    document.getElementById("numero").innerHTML = "<a href='tel:(890) 875-4199'>(890) 875-4199</a>";
}
document.getElementById("Mail").onclick = function() {
    console.log("capturamos el evento onmouseover")
    document.getElementById("Email").innerHTML = "<a href='mailto:joan.rice@example.com'>joan.rice@example.com</a>";
}
document.getElementById("Map").onclick = function() {
    console.log("capturamos el evento onmouseover")
    document.getElementById("zona").innerHTML = "<a href='https://www.google.com/maps/place/Pecan+Street+Station/@30.4429975,-97.6309152,17z/data=!3m1!4b1!4m5!3m4!1s0x8644c97e1f12611f:0x959ee977ca92c114!8m2!3d30.4430762!4d-97.6287303'>1860 W Pecan St</a>";
}
document.getElementById("linke").onclick = function() {
    console.log("capturamos el evento onmouseover")
    document.getElementById("perfil_linke").innerHTML = "<a href='https://www.linkedin.com/in/joana-rice-649965174/es'>Joana.Rice</a>";
}