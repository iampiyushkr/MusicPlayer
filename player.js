let audio=document.createElement("audio")
let playSong=document.querySelector(".play") 
let pauseSong=document.querySelector(".pause") 



let songs=["music/song1.mp3"]

function audioTrack(){
    audio.src=songs[0];
    audio.load();
}
audioTrack()

//--------audio play and pause ----------

function play(){
    playSong.style.display="none"
    pauseSong.style.display="block"
    audio.play()

}
function pause(){
    pauseSong.style.display="none"
    playSong.style.display="block"

    audio.pause()

}