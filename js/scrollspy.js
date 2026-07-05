/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar-nav a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);