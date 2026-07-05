/*=========================================
        PREMIUM GALLERY LIGHTBOX
=========================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector("#lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeBtn = document.querySelector(".lightbox-close");

const nextBtn = document.querySelector(".lightbox-next");

const prevBtn = document.querySelector(".lightbox-prev");

let currentIndex = 0;

const images = [...galleryItems];

galleryItems.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        openLightbox();

    });

});

function openLightbox(){

    lightbox.classList.add("active");

    lightboxImage.src=images[currentIndex].src;

    document.body.style.overflow="hidden";

}

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow="";

}

function nextImage(){

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    lightboxImage.src=images[currentIndex].src;

}

function prevImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    lightboxImage.src=images[currentIndex].src;

}

closeBtn.addEventListener("click",closeLightbox);

nextBtn.addEventListener("click",nextImage);

prevBtn.addEventListener("click",prevImage);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeLightbox();

    }

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        prevImage();

    }

});