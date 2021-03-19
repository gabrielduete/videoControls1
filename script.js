var video = document.getElementById('meuVideo')
let clicou = false
let mutou = true

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
}

function pause(){
    video.pause()
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
    }else{
        video.muted = false
        mutou = true
    }
}