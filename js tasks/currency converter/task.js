let formcurr=document.getElementById('from');
let fromcurrv=document.getElementById('fromval');
let tocurr=document.getElementById('to');
let tocurrv=document.getElementById('toval');

window.onload = function ()
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/currencies`)
    .then(data => data.json())
    .then((data) => {
        const entries=Object.entries(data);
        
        console.log(entries.length);
        for(let i=0;i<entries.length;i++)
        {
           
            formcurr.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} </option>`;
            tocurr.innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} </option>`;
        }
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });
}
function currencyConverter()
{
    console.log(fromcurrv.value);
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${fromcurrv.value}&from${formcurr.value}=&to=${tocurr.value}`)
  .then(resp => resp.json())
  .then((data) => {
    let cvalue=Object.values(data.rates)[0];
    tocurrv.setAttribute('value',cvalue)
    // alert(`10 GBP = ${data.rates.USD} USD`);
  });
}