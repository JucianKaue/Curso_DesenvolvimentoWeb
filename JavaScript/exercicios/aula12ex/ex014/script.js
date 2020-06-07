function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerText = `Agora são ${hora}:${min} h.`
    
    if (hora >= 5 && hora <= 12) {
        // Bom dia!
        img.src = 'imagens/manhã.png'
        window.document.body.style.background = '#e2b05c'
    } else if (hora > 12 && hora < 19) {
        // Boa tarde!
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#eb926b'
    } else {
        //Boa noite!
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#3c536f'

    }
}
    