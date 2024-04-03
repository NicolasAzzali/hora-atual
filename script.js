function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
    // BOM DIA!
    img.src = 'fotomanhã.png'
    document.body.style.background = '#fdd671'
} else if (hora < 18) {
    // BOA TARDE!
    img.src = 'fototarde.png'
    document.body.style.background = '#727e8a'
} else {
    // BOA NOITE!
    img.src = 'fotonoite.png'
    document.body.style.background = '#24293d'
}
}