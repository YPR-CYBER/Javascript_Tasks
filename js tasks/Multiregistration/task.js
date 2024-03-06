let a=document.getElementById('form11');
let b=document.getElementById('form2');
let c=document.getElementById('form3');
let d= document.getElementById('p2');
let e=document.getElementById('p3');
let f=document.getElementById('line1');
let g=document.getElementById('line2');
function gotoNextForm()
{
    
    a.style.visibility='hidden';
    b.style.visibility='visible';
    d.style.backgroundColor='rgb(141, 67, 137)';
    f.style.backgroundColor='rgb(141, 67, 137)';
    console.log(d);
}
function goprevForm()
{
    a.style.visibility='visible';
    b.style.visibility='hidden';
    d.style.backgroundColor='white';
    f.style.backgroundColor='white';
}
function gotoNextform1()
{
    b.style.visibility='hidden';
    c.style.visibility='visible';
    e.style.backgroundColor='rgb(141, 67, 137)';
    g.style.backgroundColor='rgb(141, 67, 137)';
}
function goPrevform2()
{
    b.style.visibility='visible';
    c.style.visibility='hidden';
    e.style.backgroundColor='white';
    g.style.backgroundColor='white';
}
