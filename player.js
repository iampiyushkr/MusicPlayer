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

function randomTrack(){
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
}
randomTrack()

console.log(heightLength,yLength)


let x=5;
var timmer;

let z=0;
let duration=0;
let playback=false;
let trackPlay=true;
function track(){
    
    if(playback){
        var x2=5;
        for(let i=0;i<800/5.4;i++){
            context.fillStyle="gray"
            console.log("i",yLength[i],heightLength[i])
            context.fillRect(x2,yLength[i],1,heightLength[i])
            x2+=2
        }
        playback=false
        trackPlay=true
    }
   
    
    if(trackPlay){
   
        timmer=setInterval(()=>{
         context.fillStyle = "red";
           
            context.fillRect(x,yLength[z],1,heightLength[z])
           
            x+=2;
            duration+=((audio.duration)/1200)*8000
            console.log("z",yLength[z],heightLength[z])
            if(z==149){
               
                z=-1;
                x=5;
                duration=0;
                clearInterval(timmer)
                playback=true;
                trackPlay=false
                audio.currentTime=0;
                pause()
            }
            z++;
        },((audio.duration)/1200)*8000)
    }
        
        
        
    
    
}





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
    clearInterval(timmer2)
    

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

canvas.addEventListener("click", getCoordinates)
function getCoordinates(e){
    const x = e.clientX-14;
    const y = e.clientY-27;
    clearInterval(timmer2)
    audio.currentTime=(((x/10))/149)*audio.duration;
    playSong.style.display="none"
    pauseSong.style.display="block"
    audio.play()
    console.log("x:" + x + " "+ "y:" + y);
   track1(x)
}


var timmer2;
function track1(xaxis){
    
        let x2=5;
        for(let i=0;i<800/5.4;i++){
            context.fillStyle="gray"
            console.log("i",yLength[i],heightLength[i])
            context.fillRect(x2,yLength[i],1,heightLength[i])
            x2+=2
        }
        
        let x3=5;
        for(let i=0;i<xaxis/10;i++){
            context.fillStyle="red"
            console.log("i",yLength[i],heightLength[i])
            context.fillRect(x3,yLength[i],1,heightLength[i])
            x3+=2
        }
        var z1=Math.floor(xaxis/10)+1
        var x5=x3

        timmer2=setInterval(()=>{

            context.fillStyle = "red";
           
            context.fillRect(x5,yLength[z1],1,heightLength[z1])
           
            x5+=2;
            duration+=((audio.duration)/1200)*8000
            console.log("z1",yLength[z1],heightLength[z1])
            z=z1+1;
            x=x5;
            if(z1==149){
               
                z=-1;
                x=5;
                duration=0;
                clearInterval(timmer2)
                playback=true;
                trackPlay=false
                audio.currentTime=0;
                pause()
            }
            z1++;
        },((audio.duration)/1200)*8000)


    

}
