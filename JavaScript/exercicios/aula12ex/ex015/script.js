function verificar() {
    var msg = window.document.getElementById('msg')
    var ano = new Date
    ano = ano.getFullYear()
    var nasc = window.document.getElementById('nasc').value
    
    if (nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('gender')
        var idade = ano - Number(nasc)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            gender = 'uma Mulher'
            if (idade <= 12) {
                //Criança
                img.setAttribute('src', 'image/criança-f.png')
            } else if (idade <= 22) {
                //Jovem
                img.setAttribute('src', 'image/jovem-f.png')
            } else if (idade <= 60) {
                //Adulta
                img.setAttribute('src', 'image/adulto-f.png')
            } else if (idade <= 150) {
                //Idosa
                img.setAttribute('src', 'image/idosa-f.png')
            }
        } else if (sexo[1].checked) {
            gender = 'um Homem'
            if (idade <=12) {
                //Criança
                img.setAttribute('src', 'image/criança-m.png')
            } else if (idade <= 22) {
                //Jovem
                img.setAttribute('src', 'image/jovem-m.png')
            } else if (idade <=60) {
                //Adulto
                img.setAttribute('src', 'image/adulto-m.png')
            } else if (idade < 150) {
                //Idoso
                img.setAttribute('src', 'image/idoso-m.png')
            }
        } else {
            window.alert('[ERRO] Verifique os dados sobre o gênero')
        }
    }

    msg.innerHTML = `Detectamos ${gender} de ${idade} anos`
    msg.appendChild(img)
}
