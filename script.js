function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = `images/fotomanhar.jpeg`
        document.body.style.background = '#FCF0CC'
    }

    else if (hora >= 12 && hora < 18 ) {
        // BOA TARDE
        img.src = 'images/fototarder.jpeg'
        document.body.style.background = '#FF8C61'
    }

    else {
        // BOA NOITE
        img.src = 'images/fotonoiter.jpeg'
        document.body.style.background = '#565254'
    }
}
