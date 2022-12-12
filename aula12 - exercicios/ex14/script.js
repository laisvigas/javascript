
function carregar() {
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("imagem")
    var msg2 = document.getElementById("msg2")
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
    msg.innerHTML = `Agora são <strong>${hora}:${minutos}:${segundos}`
    if (hora >= 0 && hora < 13) {
        img.innerHTML = '<img src="manha.png">' 
        document.body.style.background = "#c68023"
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 13 && hora <= 17) {
        img.innerHTML = '<img src="tarde.png">' 
        document.body.style.background = "#8195B1"
        msg2.innerHTML = 'Boa tarde!'
    } else {
        img.innerHTML = '<img src="noite.png">' 
        document.body.style.background = "#16323B"
        msg2.innerHTML = 'Boa noite!' 
    }
}

setInterval(carregar)

