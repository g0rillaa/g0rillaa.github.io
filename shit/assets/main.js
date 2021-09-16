function shit(){
    document.getElementById("sound").play()
    var shitImg = document.getElementById(`shitImg`)
    shitImg.style.transition = `2s`
    shitImg.style.top = `110%`
    setTimeout(() => {
        shitImg.style.transition = `0s`
        shitImg.style.top = `50%`
    },2000)
}

function no(){
    document.getElementById(`no`).innerHTML = 'not here'
}