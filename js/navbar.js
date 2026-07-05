"use strict";

/*==========================================
SELECT ELEMENTS
==========================================*/

const header = document.querySelector(".header");
const menu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelectorAll(".nav-list a");
const progress = document.querySelector(".scroll-progress");

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

// const appointmentBtn = document.querySelector(".appointment-btn");

/*==========================================
BACKDROP
==========================================*/

let backdrop = document.querySelector(".menu-backdrop");

if (!backdrop) {

    backdrop = document.createElement("div");

    backdrop.className = "menu-backdrop";

    document.body.appendChild(backdrop);

}

/*==========================================
MOBILE MENU
==========================================*/

if (menu && menuToggle) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        menuToggle.classList.toggle("active");

        backdrop.classList.toggle("active");

    });

    backdrop.addEventListener("click", () => {

        menu.classList.remove("active");

        menuToggle.classList.remove("active");

        backdrop.classList.remove("active");

    });

}

/*==========================================
CLOSE MENU AFTER CLICK
==========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(menu){

            menu.classList.remove("active");

        }

        if(menuToggle){

            menuToggle.classList.remove("active");

        }

        backdrop.classList.remove("active");

    });

});

/*==========================================
ACTIVE MENU
==========================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});

/*==========================================
SCROLL NAVBAR
==========================================*/

window.addEventListener("scroll",()=>{

    if(header){

        if(window.scrollY>50){

            header.classList.add("scrolled");

        }

        else{

            header.classList.remove("scrolled");

        }

    }

});

/*==========================================
SCROLL PROGRESS
==========================================*/

window.addEventListener("scroll",()=>{

    if(!progress) return;

    const winScroll=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    progress.style.width=(winScroll/height)*100+"%";

});

/*==========================================
CUSTOM CURSOR
==========================================*/

// if(cursorDot && cursorOutline){

// document.addEventListener("mousemove",(e)=>{

//     cursorDot.style.left=e.clientX+"px";

//     cursorDot.style.top=e.clientY+"px";

//     cursorOutline.style.left=e.clientX+"px";

//     cursorOutline.style.top=e.clientY+"px";

// });

// }

/*==========================================
CURSOR HOVER
==========================================*/

// if(cursorOutline){

// document.querySelectorAll("a,button,.menu-toggle").forEach(item=>{

// item.addEventListener("mouseenter",()=>{

// cursorOutline.style.width="70px";

// cursorOutline.style.height="70px";

// cursorOutline.style.borderColor="#32D4FF";

// });

// item.addEventListener("mouseleave",()=>{

// cursorOutline.style.width="42px";

// cursorOutline.style.height="42px";

// cursorOutline.style.borderColor="rgba(255,255,255,.35)";

// });

// });

// }

/*==========================================
MAGNETIC BUTTON
==========================================*/

if(appointmentBtn){

appointmentBtn.addEventListener("mousemove",(e)=>{

const rect=appointmentBtn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const moveX=(x-rect.width/2)/8;

const moveY=(y-rect.height/2)/8;

gsap.to(appointmentBtn,{

x:moveX,

y:moveY,

duration:.3,

ease:"power2.out"

});

});

appointmentBtn.addEventListener("mouseleave",()=>{

gsap.to(appointmentBtn,{

x:0,

y:0,

duration:.5,

ease:"power3.out"

});

});

}

/*==========================================
GSAP ANIMATION
==========================================*/

if(typeof gsap!=="undefined"){

gsap.from(".navbar",{

y:-120,

opacity:0,

duration:1,

ease:"power4.out"

});

gsap.from(".logo",{

x:-60,

opacity:0,

duration:1,

delay:.2

});

gsap.from(".nav-list li",{

y:-40,

opacity:0,

stagger:.08,

duration:.7,

delay:.4

});

if(appointmentBtn){

gsap.from(appointmentBtn,{

x:80,

opacity:0,

duration:1,

delay:.6

});

}

}

/*==========================================
LENIS
==========================================*/

if(typeof Lenis!=="undefined"){

const lenis=new Lenis({

duration:1.1,

smoothWheel:true

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

}

/*==========================================
END
==========================================*/