function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("Dados inválidos")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - (fano.value)
        var genero = ""
        if (fsex[0].checked) {
            genero = "Masculino"
        } else {
            genero = "Feminino"
        }
        res.innerHTML = `Gênero: ${genero}, idade: ${idade}`
    }
}