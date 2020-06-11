var numbers = []

function isNumeric(n) {
    if (n < 1 || n > 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (numbers.indexOf(n) != -1) {
        return false
    } else {
        return true
    }
}



function Add_Number() {
// Declaring Variables
    let num = window.document.getElementById('num')
    n = Number(num.value)
    let table = window.document.querySelector('select#tab')
    let msg = window.document.getElementById('msg')

// Test
    if  (isNumeric(n)) {
        window.alert('[ERRO] Digite um valor válido por favor')
    } else if (!inList(n, numbers)) {
        window.alert('O valor digitado já está na lista')
    } else {

// Adding and showind the number
            let item = document.createElement('option')
            numbers.push(n) 
            item.text = `Valor ${n} adiconado`
            table.appendChild(item)
// Cleanning the page
            msg.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function Analyze() {
    if (numbers.length == 0) {
        window.alert('Adicione valores para serem analizados')
    } else {

// Defining variables
        let msg = document.querySelector('div#msg')
        let maior = numbers[0]
        let menor = numbers[0]
        let s = 0

// Analize data - 
        for (e in numbers) {
            if (e > maior) {
                maior = numbers[e]
            }
            if (e < menor) {
                menor = numbers[e]
            }
            s += numbers[e]
        }
            
        /* Também é possível
        let n = numbers.sort()
        menor = n[0]
        maior = n[(n.length-1)]
        */

// Cleaning the page
        msg.innerHTML = ''        

// Showing de results
        msg.innerHTML += `<p>No total foram informados <strong>${numbers.length}</strong> números</p>`
        msg.innerHTML += `<p>O menor número informado foi <strong>${maior}</strong></p>`
        msg.innerHTML += `<p>O maior número informado foi <strong>${menor}</strong></p>`
        msg.innerHTML += `<p>A soma de todos os valores é <strong>${s}</strong></p>`
        msg.innerHTML += `<p>A média de todos os valores é <strong>${s/numbers.length}</strong></p>`
    }
}