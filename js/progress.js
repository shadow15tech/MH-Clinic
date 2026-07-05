const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});