const cityObj=
{
    INDIA:['Hyderabad','Chennai','Mumbai','Kolkata','Banglore','Pune','Delhi'],
    AUSTRALIA:['Sydney','Melborn','Brisbane' ,'Perth','Adelaide','Canberra','Hobart','Darwin'],
    USA:['New York', 'Los Angeles',' Chicago' ,' Houston' ,' Phoenix',' Philadelphia',' San Antonio', ' San Diego'],
    NEWZLAND:['Auckland','Wellington','Hamilton','Tauranga','Napier' ],
    JAPAN:['Tokyo','Yokohama','Osaka','Nagoya','Sapporo','Fukuoka','Kobe']
}

let ab='';
function changedEvent()
{
    let city1='';
    
    const a=document.getElementById('Country');
    const b=document.getElementById('city');
    while(b.firstChild)
    {
        b.removeChild(b.firstChild);
    }
     city1=cityObj[a.value];
    city1.map((x)=>
    {
        ab=document.createElement('option');
        ab.innerHTML=x;
        b.appendChild(ab);
    })
    
}

