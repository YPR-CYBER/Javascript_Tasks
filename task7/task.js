let video=document.getElementById('videoid');
let pausebtn=document.getElementById('pauseButton');
let vidr=document.getElementById('videoRange')
/* Pause Button Completed */
function pauseClicked()
{
    video.play();
    setInterval(() => {
        vidr.value=video.currentTime;
    },200);
   
    if(pausebtn.classList.contains('fa-pause'))
    {
        video.pause()
        pausebtn.classList.remove('fa-pause');
        pausebtn.classList.add('fa-play');
    }
    else
    {
        video.play();
        pausebtn.classList.remove('fa-play');
        pausebtn.classList.add('fa-pause');
    }

}

/* Backward  & Forward Button */
function backwardClicked()
{
    video.currentTime -=10;
}
function forwardClicked()
{
    video.currentTime +=10;
}

/* Here workon volume button */

let volumebtn=document.getElementById('volume')

function volumeX()
{
    if(volumebtn.classList.contains('fa-volume-high'))
    {
        video.volume=0.5;
        volumebtn.classList.replace('fa-volume-high','fa-volume-xmark');
    }
    else
    {
        video.volume=0.0;
        volumebtn.classList.replace('fa-volume-xmark','fa-volume-high');
    }
}

//here work on volume Slider

let volumeRang=document.getElementById('volumeRange');

function volumeR()
{
    video.volume=volumeRang.value;
    if(volumeRang.value==0)
    {
        volumebtn.classList.replace('fa-volume-high','fa-volume-xmark');
    }
    else
    {
        volumebtn.classList.replace('fa-volume-xmark','fa-volume-high');
    }
}

/* Here we will work on special buttons */
let special1=document.getElementById('speedbutton');
let opt=document.getElementById('options');
let toggle=true;
function speedRange()
{
    if(toggle)
    {
        opt.style.visibility='visible';
        toggle=false;
    }
    else 
    {
        opt.style.visibility='hidden';
        toggle=true
    }
}
function speedF(speedv)
{
    video.playbackRate=speedv;
}

//now we minimize the video

function Imagein()
{
    video.requestPictureInPicture();
}


function videotimeChange()
{
    video.currentTime=vidr.value;
}

/* Vide0 Maximize()*/


function maxiMize()
{
    if(video.classList.contains('fullscreen1'))
    {
        video.classList.remove('fullscreen1')
    }
    else
    {
        video.classList.add('fullscreen1');
        
    }
  
}