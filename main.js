const toggleBtn= document.querySelector('.toggleBtn');
const list=document.querySelector('.icon_list');
const icon=document.querySelector('.icon_icon2');


toggleBtn.addEventListener('click',() =>{
    list.classList.toggle('active');
    icon.classList.toggle('active');

})