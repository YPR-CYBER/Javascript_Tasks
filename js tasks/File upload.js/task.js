
function onChangeValue()
{
    let a=document.getElementById("photofile");
    let c=document.getElementById('photo');
    var imgurl='';
    if(a.files.length>0)
    {
        let p=a.files[0];
        
            const reader=new FileReader();
            reader.onload=function (e)
            {
                // imgurl=e.target.result;
                c.style.backgroundImage=`url(${e.target.result})`;
            };
            reader.readAsDataURL(p);
    
            console.log(imgurl);
    }
    else
    {
        console.log("file is not uploaded by user");
    }
   c.style.backgroundImage=`url(${imgurl})`;
}
