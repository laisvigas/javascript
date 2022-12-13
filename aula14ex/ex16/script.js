function verificar() {
    var numero = document.getElementById("numero")
    var resultado = document.getElementById("resultado")

    if (numero.value.length == 0) {
        window.alert("Por favor, digite um número.")
    } else {
        resultado.innerHTML = ""
        for (var c = 1; c <= 10; c ++) {
        resultado.innerHTML += `${numero.value} x ${c} = ${c * numero.value} <br>`
        }
        
    }
}