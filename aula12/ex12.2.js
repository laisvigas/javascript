
var horaatual = new Date()
var horadodia = horaatual.getHours()
console.log(`Agora são ${horadodia} horas!`)
if (horadodia < 12) {
    console.log ("Bom Dia!")
} else if (horadodia < 17) {
    console.log ("Boa Tarde!")
} else if (horadodia <= 23) {
    console.log ("Boa Noite!")
}