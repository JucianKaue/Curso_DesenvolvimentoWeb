var now = new Date()
var hora = now.getHours()
console.log(`Agora são extamente ${hora}:${new Date().getMinutes()} h.`)
if (hora <= 6) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}