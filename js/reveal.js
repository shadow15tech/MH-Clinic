// =====================================
// PREMIUM SCROLL REVEAL
// =====================================

const revealElements = document.querySelectorAll(

".reveal,.reveal-left,.reveal-right,.reveal-scale"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:.15

}

);

revealElements.forEach(el=>{

revealObserver.observe(el);

});