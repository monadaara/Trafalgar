const burger=document.querySelector('.burger');
const menu=document.querySelector('.navmenu')
burger.addEventListener('click',()=>
{
    burger.classList.toggle('is-active');
    menu.classList.toggle('active');
})