let num = [2, 4, 3, 5]
num[4] = 6 // Acrescenta em um posição definida
num.push(1) // Acrescenta na ultima posição
num.sort() // Ordena em ordem crescente

console.log(num) // Mostra o vetor
console.log(`O primiero valor do vetor é ${num[0]}`) // Mostra a posição 0 do vetor
console.log(`O vetor tem ${num.length} valores`) // Mostra a quantidade de valores do vetor
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor 4 não existe')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
