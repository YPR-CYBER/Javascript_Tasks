let btn1=document.getElementById('togglebtn')
let song=document.getElementById('music2');
let songprogressbar=document.getElementById('progresssong');
song.onloadedmetadata=function ()
{
    songprogressbar.max=song.duration;
    songprogressbar.value=song.currentTime;
}
if(song.play())
{
    setInterval(()=>
    {
        songprogressbar.value=song.currentTime;
        
    },200);
}
let songlist=['song1','song2'];
let playnext=document.getElementById('music');
if(song.currentTime==song.duration)
{
   for(let i=0;i<songlist.length()+1;i++)
   {
       playnext.setAttribute('src',`songs/${songlist[i]}.mp3`);
   }
   
}
function startMusic()
{
    if(btn1.classList.contains('fa-pause'))
    {
        song.pause()
        btn1.classList.remove('fa-pause');
        btn1.classList.add('fa-play');
    }
    else
    {
        song.play();
        btn1.classList.remove('fa-play');
        btn1.classList.add('fa-pause');
    } 
}
function forwardsong()
{
    song.currentTime +=10;
}
function backwardsong()
{
    song.currentTime -=10;
}
songprogressbar.onchange =function ()
 {
    song.currentTime=songprogressbar.value;
    song.play();
    btn1.classList.remove('fa-play');
    btn1.classList.add('fa-pause');
 }

 let vid=document.getElementById('video1');
 vid.play();

 
 