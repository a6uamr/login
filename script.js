const I=document.querySelectorAll('input'),
  d=document.querySelector('dialog'), r=document.querySelector('dialog span');
function v(){for(let i=0;i<I.length;i++)
  {if(!I[i].value){r.innerHTML='All fields required'; d.showModal(); return 1;}}}
function x()
  {document.querySelector('i').addEventListener('click',function(){d.close()});}
let U=localStorage.getItem('U'); U=U?JSON.parse(U):[0];
function u(){localStorage.setItem('U',JSON.stringify(U));}
switch(document.body.id)
  {case 'u': if(U[0]) {location='home.html'; break;}
    document.querySelector('button').addEventListener('click',function()
    {if(v()) return; if(!/^[a-z ,.'-]+$/i.test(I[0].value)){r.innerHTML=
    'Name invalid'; d.showModal(); return;} for(let i=0;i<U.length;i++)
    {if(I[1].value==U[i].e){r.innerHTML='Email already registered'; d.showModal();
    return;}} if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    .test(I[1].value)){r.innerHTML='Email invalid'; d.showModal(); return;}
    if(!/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i.test(I[2].value)){r.innerHTML=`Password
    must be 8+ characters, at least 1 letter and 1 number`; d.showModal(); return;}
    U.push({n:I[0].value,e:I[1].value,p:I[2].value}); u();
    location='index.html';}); x(); break;
  case 'i': if(U[0]) {location='home.html'; break;}
    document.querySelector('button').addEventListener('click',function()
    {if(v()) return; let i=0,p; while(i<U.length){if(I[0].value==U[i].e)
    {p=U[i].p; break;} i++;} if(p){if(I[1].value==p){U[0]=U[i].n; u();
    location='home.html'} else {r.innerHTML='Password incorrect'; d.showModal()}}
    else {r.innerHTML='Email not registered'; d.showModal();}}); x(); break;
  case 'o': if(!U[0]) {location='index.html'; break;}
    document.querySelector('h1 span').innerHTML=U[0];
    document.querySelector('button').addEventListener('click',
    function(){U[0]=0; u(); location='index.html';});}