let btnopen=document.getElementById('open')
let btnclose=document.getElementById('close')
let cont=document.querySelector('.cont');

btnclose.onclick=function(){
cont.classList.add('hide')
btnclose.classList.add('hide')
btnopen.classList.remove('hide')
}

btnopen.onclick=function(){

cont.classList.remove('hide')
btnclose.classList.remove('hide')
btnopen.classList.add('hide')
}


