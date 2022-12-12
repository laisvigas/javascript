
function carregar() {
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    if (minutos < 10) {
        minutos = "0" + minutos
    } 
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    msg.innerHTML = `<h1>${hora}:${minutos}:${segundos}</h1>`
}

setInterval(carregar)

