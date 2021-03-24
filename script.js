let video = document.getElementById('meuVideo')

let botaoPlay = document.getElementById('botaoPlay')
let botaoPause = document.getElementById('botaoPause')

let somTrue = document.getElementById('somTrue')
let somFalse = document.getElementById('somFalse')

let botoes = document.getElementById('botoes')
let container = document.getElementById('container')

let barraProgresso
let update

let mutou = true

window.onload = iniciar()

botoes.style.display = 'none'

function iniciar(){
    barraProgresso = document.getElementById('barraProgresso')
    duracaoTotal = video.duration

    update = setInterval(atualizaBarra, 500)
}

function atualizaBarra(){
    if (!video.paused){
        var resultado = (208.050794 * video.currentTime) / video.duration
        barraProgresso.style.width = parseInt(resultado) + "px"
    }
}

container.onmouseover = function(){
    video.style.filter = 'opacity(50%)'
    botoes.style.display = 'initial'
}

container.onmouseout = function(){
    video.style.filter = 'opacity(100%)'
    botoes.style.display = 'none'
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

// FUNÇÃO COMENTADA BONUS: Caso queira fazer o video pausar ou dar play ao clicar no video :P
// let clicou = false
// function clicarVideo(){
//     if (clicou == false){
//         video.pause()
//         clicou = true
//     }else{
//         video.play()
//         clicou = false
//     }
// }