/*=========================================
        BACK TO TOP
=========================================*/

const backTop = document.querySelector(".back-top");
const progressCircle = document.querySelector(".progress-ring-circle");

if (backTop && progressCircle) {

    const radius = 28;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollTop / docHeight;

        const offset = circumference - (progress * circumference);

        progressCircle.style.strokeDashoffset = offset;

        if (scrollTop > 350) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}