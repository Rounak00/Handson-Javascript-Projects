
window.addEventListener("keydown",(e)=>{
    let audio=document.querySelector(`audio[data-key="${e.keycode}"]`)
    let key= document.querySelector(`.key[data-key="${e.keycode}"]`)
    if (audio){
        audio.play()
        audio.currentTime=0
        key.classList.add("playing")
    }
    return;
})