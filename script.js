const I=document.querySelectorAll('input');
let E=localStorage.getItem('E'); E=E?JSON.parse(E):[0];
function e(){localStorage.setItem('E',JSON.stringify(E));}
switch(document.body.id)
  {case 'U': if(E[0]) {location='home.html'; break;}
    document.getElementById('u').addEventListener('click',function()
    {if(!/^[a-z ,.'-]+$/i.test(I[0].value)){alert('Name invalid'); return;}
    for(let i=0;i<E.length;i++) {if(I[1].value==E[i].e)
    {alert('Email already registered'); return;}}
    if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    .test(I[1].value)){alert('Email invalid'); return;}
    if(!/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i.test(I[2].value))
    {alert('Password invalid; min 8 characters, at least 1 letter and 1 number');
    return;} E.push({n:I[0].value,e:I[1].value,p:I[2].value}); I[0].value='';
    I[1].value=''; I[2].value=''; e(); location='index.html';}); break;
  case 'I': if(E[0]) {location='home.html'; break;}
    document.getElementById('i').addEventListener('click',
    function(){let i=0,p; while(i<E.length){if(I[0].value==E[i].e) {p=E[i].p;
    break;} i++;} if(p){if(I[1].value==p){E[0]=E[i].n; e(); location='home.html'}
    else alert('Password incorrect')} else alert('Email not registered')}); break;
  case 'O': if(!E[0]) {location='index.html'; break;}
    document.querySelector('h1 span').innerHTML=E[0];
    document.getElementById('o').addEventListener('click',
    function(){E[0]=0; e(); location='index.html';});}