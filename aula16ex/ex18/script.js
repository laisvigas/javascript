let numero = document.querySelector("input#numero")
let lista = document.querySelector("select#lista")
let resultado = document.querySelector("div#resultado")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement("option")
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    numero.value = ""
    numero.focus()
}

function finalizar() {
    if (valores.length == "") {
        window.alert("Por favor, digite um valor antes de finalizar")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / total

        resultado.innerHTML = ""
        resultado.innerHTML += `<p> Ao todo temos ${total} valores adicionados </p>`
        resultado.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resultado.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}