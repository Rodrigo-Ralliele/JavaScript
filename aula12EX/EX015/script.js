function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os Dados e tente Novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''     
        res.innerHTML = `Idade Calculada: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade == 0 && idade < 10){
                // Criança 
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }
                else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'foto-adulto-m.jpg')
                } else {
                    //idoso
                    img.setAttribute('src', 'foto-idoso-m.jpg')
                }
            
        } else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade == 0&& idade <10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                 //Jovem
                 img.setAttribute('src' , ('foto-jovem-f.jpg'))
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src', 'foto-adulto-f.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild (img)
    }
}
