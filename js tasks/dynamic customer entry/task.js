let count=1;

function Addnew()
{
    count +=1;
    let dymn=document.createElement('div')
    dymn.setAttribute('id',count)
    dymn.innerHTML=
  `
      <input type="text" class="inputname" placeholder="name"/>
      <input type="text" class="inputmail" placeholder="email"/>
      <input type="number" class="inputsalary" placeholder="salary"/>
      <button onclick="removeDiv(${count})">Remove</button>
      <button onclick="Addnew()">Add New</button>`

    document.body.appendChild(dymn);
}

function removeDiv(num)
{
    if(num==1)
    {
        return ;
    }
    else
    {

        let d= document.getElementById(num);
  d.remove();
    }
   
}
