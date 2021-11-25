//.............audio track..................

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const heights = [30,60,25,27,36,43,26,28,48,50,55,35];

const y = [15,27,24,35,10,12,32,19];

const height = ()=>{
    return heights[Math.floor(Math.random()*(heights.length-1))];
}

const yIndex = ()=>{
     return y[Math.floor(Math.random()*(y.length-1))];
}

function Wave(a){
    
   track()
    

}

let heightLength=[];
let yLength=[]

let x1=5
for(let i=0;i<800/5.4;i++){
    context.fillStyle="gray"
    let ran = height();
    heightLength.push(ran)
    let ran1 = yIndex();
    yLength.push(ran1)
    context.fillRect(x1,ran1,1,ran)
    
    x1+=2;
}




// let x=5;
// var timmer;

// function track(){

//     let duration=0
    
//         timmer=setInterval(()=>{
//          context.fillStyle = "red";
//             let ran = height();
//             let ran1 = yIndex();
//             context.fillRect(x,ran1,1,ran)
//             console.log(audio.duration)
//             x+=2;
//             duration+=((audio.duration)/1200)*8000
//             if(duration>=(audio.duration)*1000){
//                 pause()
//                 clearInterval(timmer)
//             }
//         },((audio.duration)/1200)*8000)
        
        
        
    
    
// }





let audio=document.createElement("audio")
let playSong=document.querySelector(".play") 
let pauseSong=document.querySelector(".pause") 
let mute=document.querySelector(".mute")
let unMute=document.querySelector(".unMute")




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
    track()
        
}

function pause(){
    pauseSong.style.display="none"
    playSong.style.display="block"
    audio.pause()
    clearInterval(timmer)
    

}
function Mute(){
    mute.style.display="none"
    unMute.style.display="block"
    audio.volume=1;
}
function Unmute(){
    unMute.style.display="none"
    mute.style.display="block"
   
    audio.volume=0;
}

for(let i=0;i<145;i++){
    context.fillStyle="green"
}