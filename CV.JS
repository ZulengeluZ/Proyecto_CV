/*document.getElementById("Telefono").onclick = function() {
    console.log("capturamos el evento onclick")
    document.getElementById("numero").innerHTML = "<a class='colorlink' href='tel:(890) 875-4199'>(890) 875-4199</a>";
}
*/

document.getElementById("Telefono").onclick = function() {
    console.log("capturamos el evento onclick")
    clickicono("numero", "tel:(890) 875-4199", "(890) 875-4199")
}

document.getElementById("Mail").onclick = function() {
    console.log("capturamos el evento onclick")
    clickicono("Email", "mailto:joan.rice@example.com", "joan.rice@example.com")
}

document.getElementById("Map").onclick = function() {
    console.log("capturamos el evento onclick")
    clickicono("zona", "https://www.google.com/maps/place/Pecan+Street+Station/@30.4429975,-97.6309152,17z/data=!3m1!4b1!4m5!3m4!1s0x8644c97e1f12611f:0x959ee977ca92c114!8m2!3d30.4430762!4d-97.6287303 target='_blank'", "1860 W Pecan St")
}

document.getElementById("linke").onclick = function() {
    console.log("capturamos el evento onclick") 
    clickicono("perfil_linke", "https://www.linkedin.com/in/joana-rice-649965174/es target='_blank'", "Joana.Rice")
}

/*document.getElementById("Mail").onclick = function() {
    console.log("capturamos el evento onclick")
    document.getElementById("Email").innerHTML = "<a class='colorlink' href='mailto:joan.rice@example.com'>joan.rice@example.com</a>";
}
document.getElementById("Map").onclick = function() {
    console.log("capturamos el evento onclick")
    document.getElementById("zona").innerHTML = "<a class='colorlink' href='https://www.google.com/maps/place/Pecan+Street+Station/@30.4429975,-97.6309152,17z/data=!3m1!4b1!4m5!3m4!1s0x8644c97e1f12611f:0x959ee977ca92c114!8m2!3d30.4430762!4d-97.6287303' target='_blank'>1860 W Pecan St</a>";
}
document.getElementById("linke").onclick = function() {
    console.log("capturamos el evento onclick")
    document.getElementById("perfil_linke").innerHTML = "<a class='colorlink' href='https://www.linkedin.com/in/joana-rice-649965174/es' target='_blank'>Joana.Rice</a>";
}*/


function clickicono (id, referencia, texto) {
    console.log("captura función clickicono")
    document.getElementById(id).innerHTML = "<a class='colorlink' href="+referencia+">"+texto+"</a>";
}