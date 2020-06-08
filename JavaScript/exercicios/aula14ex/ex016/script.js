function contar() {
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let cont = document.getElementById('msg')
    cont.innerText = ''

    if (inicio === '' || fim.lenght == 0) {
        cont.innerText = 'Não é possível realizar esta contagem'   
    } else {
        // Se o passo for 0
        if (passo == 0) {
            window.alert('Passo inserido inválido, será considerado o valor 1')
            passo = 1
        }
        // Inverte o começo e o final
        if (inicio > fim) {
            let i = inicio
            inicio = fim
            fim = i
        }
        // Contagem
        for (let c = Number(inicio); c <= Number(fim); c += Number(passo)) {
            if (c != Number(fim)) {
                cont.innerHTML +=  `${c} \u{1F449} `
            } else {
                cont.innerHTML =  `${cont.textContent} ${c} \u{1F3C1} ` 
            }
        }
    }
}