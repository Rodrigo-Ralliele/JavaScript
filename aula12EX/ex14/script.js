function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12) {
        //BOM DIA!!
        document.body.style.background = '#D9B752'
        img.src = 'fotomanha.png'
    } else if ( hora >=12 && hora <18) {
        //BOA TARDE
        document.body.style.background = '#F28749'
        img.src ='fototarde.png'
    } else {
        document.body.style.background = '#000D0C'
        //BOA NOITE
        img.src ='fotonoite.png'
    }
}

