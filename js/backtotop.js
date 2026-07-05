/*=========================================
        PREMIUM BACK TO TOP
=========================================*/

const backTop = document.querySelector(".back-top");
const progressCircle = document.querySelector(".progress-ring-circle");

if (backTop && progressCircle) {

    const radius = 28;
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    function updateBackToTop() {

        const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        const docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            docHeight > 0 ? scrollTop / docHeight : 0;

        const offset =
            circumference - (progress * circumference);

        progressCircle.style.strokeDashoffset = offset;

        if (scrollTop > 300) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    // Normal Scroll
    window.addEventListener("scroll", updateBackToTop);

    // Resize
    window.addEventListener("resize", updateBackToTop);

    // Initial Run
    updateBackToTop();

    // Smooth Scroll
    backTop.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}