let video = document.getElementById('meuVideo')
let botaoPlay = document.getElementById('botaoPlay')
let botaoPause = document.getElementById('botaoPause')
let somTrue = document.getElementById('somTrue')
let somFalse = document.getElementById('somFalse')
let botoes = document.getElementById('botoes')
let container = document.getElementById('container')
let clicou = false
let mutou = true
botoes.style.display = 'none'

container.onmouseover = function(){
    video.style.filter = 'opacity(60%)'
    botoes.style.display = 'initial'
}

container.onmouseout = function(){
    video.style.filter = 'opacity(100%)'
    botoes.style.display = 'none'
}

function clicarVideo(){
    if (clicou == false){
        video.pause()
        clicou = true
    }else{
        video.play()
        clicou = false
    }
}

function play(){
    video.play()
    botaoPause.style.display = 'initial'
    botaoPlay.style.display = 'none'
}

function pause(){
    video.pause()
    botaoPlay.style.display = 'initial'
    botaoPause.style.display = 'none'
}

function voltar(){
    video.pause()
    video.currentTime = 0
    video.play()
}

function mais(){
    video.playbackRate += 0.10
}

function menos(){
    video.playbackRate -= 0.10
}

function mais10(){
    video.currentTime += 10.0
}

function menos10(){
    video.currentTime -= 10.0
}

function mutado(){
    if (mutou == true){
        video.muted = true
        mutou = false
        somTrue.style.display = 'initial'
        somFalse.style.display = 'none'
    }else{
        video.muted = false
        mutou = true
        somTrue.style.display = 'none'
        somFalse.style.display = 'initial'
    }
}