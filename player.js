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
for(let i=0;i<=149;i++){
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
rect(40,2,20,5,"#0eb422")
straight(49,6,1,30,"#0eb422")
circle(49.5, 40, 1, 0,"#0eb422")

console.log(heightLength,yLength)


var x=5;
var timmer;

var z=0;
var duration=0;
var playback=false;
var trackPlay=true;
function track(){
    console.log("asasasasa",audio.duration)

    if(playback){
        var x2=5;
        for(let i=0;i<=149;i++){
            context.fillStyle="gray"
           
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
    audio.src=`music/song1.mp3`;
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
    if(window.innerWidth>1300){
        var width=window.innerWidth-240;
    }else{
        var width=window.innerWidth-220;
    }
    audio.currentTime=((((x-80)/(width/149)))/149)*audio.duration;
    playSong.style.display="none"
    pauseSong.style.display="block"
    audio.play()
    console.log("x:" + x + " "+ "y:" + y);
   track1(x-80)
}


var timmer2;
function track1(xaxis){
    if(window.innerWidth>1300){
        var width=window.innerWidth-240;
    }else{
        var width=window.innerWidth-220;
    }

    console.log(window.innerWidth)
    context.clearRect(0,0, 1200, 400);
        let x2=5;
        for(let i=0;i<=149;i++){
            context.fillStyle="gray"
        
            context.fillRect(x2,yLength[i],1,heightLength[i])
            x2+=2
        }
        
        let x3=5;
        for(let i=0;i<xaxis/(width/149);i++){
            context.fillStyle="red"
           
            context.fillRect(x3,yLength[i],1,heightLength[i])
            x3+=2
        }
        var z1=Math.floor(xaxis/(width/149))+1
        var x5=x3

        timmer2=setInterval(()=>{

            context.fillStyle = "red";
           
            context.fillRect(x5,yLength[z1],1,heightLength[z1])
           
            x5+=2;
            duration+=((audio.duration)/1200)*8000
            
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

function rect(x,y,w,h,bg){
    context.fillStyle=bg;
    context.beginPath();
    context.fillRect(x,y,w,h);
    context.closePath();
    context.fillStyle = "white";
      context.font = "4px sans-serif";
      context.fillText("introduction", x,y+3 );
}
function straight(x,y,w,h,bg){
    context.fillStyle=bg;
    context.beginPath();
    context.fillRect(x,y,w,h);
    context.closePath();
}
function circle(x,y,w,h,bg) {
    context.beginPath();
    context.arc(x,y,w,h, Math.PI*2);
    context.fillStyle=bg;
    context.fill();
    context.closePath();
}

