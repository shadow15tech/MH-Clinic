/*=========================================
        PREMIUM SCROLL SPY
=========================================*/

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list .nav-link");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const id=entry.target.id;

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + id){

link.classList.add("active");

}

});

}

});

},

{

root:null,

threshold:.35,

rootMargin:"-120px 0px -50% 0px"

}

);

sections.forEach(section=>{

observer.observe(section);

});