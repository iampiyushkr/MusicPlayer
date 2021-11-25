//.............audio track..................

const canvas = document.getElementById("canvas");      //getting canvas tag refrence
const context = canvas.getContext("2d");


const heights = [30,60,25,27,36,43,26,28,48,50,55,35];    //taking random height of canvas rectangle in array

const y = [35,47,34,55,30,32,52,39];                       //taking random distance from y-axis of canvas rectangle in array

const height = ()=>{
    return heights[Math.floor(Math.random()*(heights.length-1))];   //choosing random height from height array for canvas rectangle.
}

const yIndex = ()=>{                                                //choosing random distance from y-axis from y array for canvas rectangle.
     return y[Math.floor(Math.random()*(y.length-1))];
}

function Wave(a){                                                   //calling track function for playing track
    
   track()
    

}



let heightLength=[];                                                                                    
let yLength=[]

function randomTrack(){
let x1=5
for(let i=0;i<=149;i++){                                             //creating some random track and putting their height and y-axis distance in empty array of heightLength and yLength by which i can make same track letter. 
                                                                                
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

//...........................................making sticky.................................
rect(40,2,20,5,"#0eb422","introduction")                    
straight(49,6,1,30,"#0eb422")
circle(49.5, 36, 1, 0,"#0eb422")

rect(70,3,20,5,"#1de18d","one_six")
straight(79,6,1,30,"#1de18d")
circle(79.4, 36, 1, 0,"#1de18d")

rect(220,7,40,5,"#926a6b","Report Building-Empathy")
straight(257,10,1,26,"#926a6b")
circle(257.4, 36, 1, 0,"#926a6b")

rect(230,1,40,5,"#6aac4b","Report Building-Energy")
straight(267,6,1,30,"#6aac4b")
circle(267.4, 36, 1, 0,"#6aac4b")

rect(230,15,20,5,"#1b00bb","Profile")
straight(247,20,1,16,"#1b00bb")
circle(247.4, 36, 1, 0,"#1b00bb")





//................................play song and filling canvas rectangle according to the audio track........................

var x=5;
var timmer;

var z=0;
var duration=0;
var playback=false;
var trackPlay=true;
function track(){                                                         //in this function i have done the implementation of track according to the song length.
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




//............................audio functionality.............................
let audio=document.createElement("audio")                               //creating audo tag
let playSong=document.querySelector(".play")                            //getting refrence of play button
let pauseSong=document.querySelector(".pause")                          //getting rafrence of pause btton
let mute=document.querySelector(".mute")                                //getting refrence of mute button
let unMute=document.querySelector(".unMute")                             //getting refrence of unmute button




let songs=["music/song1.mp3"]

 function audioTrack(){                                                 //loading song in the audio tag.
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

// for(let i=0;i<145;i++){
//     context.fillStyle="green"
// }

///............implementation of playing audio according to selecting bar.............................

canvas.addEventListener("click", getCoordinates)                
function getCoordinates(e){                                         //finding the value of x and y axis according to click on canvas
    const x = e.clientX-14;
    const y = e.clientY-27;
    clearInterval(timmer2)
    if(window.innerWidth>1300){
        var width=window.innerWidth-240;
    }else{
        var width=window.innerWidth-220;                           //calculating value for playing audio according to selected bar;
    }
    audio.currentTime=((((x-80)/(width/149)))/149)*audio.duration;
    playSong.style.display="none"
    pauseSong.style.display="block"
    audio.play()
    
   track1(x-80)                                                             
}


var timmer2;
function track1(xaxis){                                               //implementing the functionality of playing audio according according to the selected bar
    if(window.innerWidth>1300){
        var width=window.innerWidth-240;
    }else{
        var width=window.innerWidth-220;
    }

    
    context.clearRect(0,0, 1200, 400);                  //clearing old canvas rectangle 

    rect(40,2,20,5,"#0eb422","introduction")            //creating new one along with sticky
straight(49,6,1,30,"#0eb422")
circle(49.5, 36, 1, 0,"#0eb422")

rect(70,3,20,5,"#1de18d","one_six")
straight(79,6,1,30,"#1de18d")
circle(79.4, 36, 1, 0,"#1de18d")

rect(220,7,40,5,"#926a6b","Report Building-Empathy")
straight(257,10,1,26,"#926a6b")
circle(257.4, 36, 1, 0,"#926a6b")

rect(230,1,40,5,"#6aac4b","Report Building-Energy")
straight(267,6,1,30,"#6aac4b")
circle(267.4, 36, 1, 0,"#6aac4b")

rect(230,15,20,5,"#1b00bb","Profile")
straight(247,20,1,16,"#1b00bb")
circle(247.4, 36, 1, 0,"#1b00bb")


        let x2=5;
        for(let i=0;i<=149;i++){
            context.fillStyle="gray"
        
            context.fillRect(x2,yLength[i],1,heightLength[i])
            x2+=2
        }
        
        let x3=5;
        for(let i=0;i<xaxis/(width/149);i++){           //filling color till the selected bar
            context.fillStyle="red"
           
            context.fillRect(x3,yLength[i],1,heightLength[i])
            x3+=2
        }
        var z1=Math.floor(xaxis/(width/149))+1
        var x5=x3

        timmer2=setInterval(()=>{                       //and now playing song and filling color after the selected bar according to the duration of the audio 

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

//........these are the function for sticky..............................

function rect(x,y,w,h,bg,title){
    context.fillStyle=bg;
    context.beginPath();
    context.fillRect(x,y,w,h);
    context.closePath();
    context.fillStyle = "white";
      context.font = "4px solid sans-serif";
      context.fillText(title, x,y+3 );
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

