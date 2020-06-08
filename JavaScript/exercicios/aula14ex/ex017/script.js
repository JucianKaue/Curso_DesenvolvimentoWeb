function tabuada() {
    let num = window.document.querySelector('input#num')
    let msg = window.document.querySelector('select#tab')

    if (num.value.lenght == 0) {
        window.alert('Por favor, Escreva um número')
    } else {
        let n = Number(num.value)
        msg.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            msg.appendChild(item)
        }  
    }
}