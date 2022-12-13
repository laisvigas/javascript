function verificar() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.getElementById("passo")
    let resultado = document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Por favor, digite um número válido.")
    } else {
        resultado.innerHTML = `Contando de ${inicio.value} até ${fim.value} pulando ${passo.value} casas:`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido. O 0 será substituído pelo 1.")
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador}`
            } 
        } else {
            // contagem decrescente
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador}`
            }
        }
    }
}
    
