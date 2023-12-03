setInterval(function carregar(){
    var msg = window.document.querySelector('div#msg')
    var imagem = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    //passando a hora para o html
    msg.innerHTML = `<p> Agora são ${hora}:${minuto}:${segundo}</p>`

    //alterando a imagem e o fundo da pagina de acordo com os segundos
    if(segundo >=0 && segundo < 20){
        imagem.src = 'dia.png'
        document.body.style.background = '#726d57'
    }else if(segundo >= 20 && segundo <40){
        imagem.src = 'wolf.png'
        document.body.style.background = '#667c7b'
    }else{
        imagem.src = 'noite.png'
        document.body.style.background = '#1c3f57'
    }
    },1000)