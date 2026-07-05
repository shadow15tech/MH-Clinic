/*=========================================
        PREMIUM COUNTER
=========================================*/

const counters = document.querySelectorAll(".stat-number h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const targetText = counter.textContent.trim();

        let target = parseFloat(counter.dataset.count);

        let suffix = "";

        if(targetText.includes("+")){

            suffix = "+";

        }

        else if(targetText.includes("%")){

            suffix = "%";

        }

        else if(targetText.includes("★")){

            suffix = "★";

        }

        let current = 0;

        const increment = target / 80;

        const updateCounter = () => {

            current += increment;

            if(current < target){

                if(Number.isInteger(target)){

                    counter.textContent = Math.floor(current) + suffix;

                }else{

                    counter.textContent = current.toFixed(1) + suffix;

                }

                requestAnimationFrame(updateCounter);

            }else{

                counter.textContent = target + suffix;

            }

        };

        updateCounter();

        counterObserver.unobserve(counter);

    });

},{

    threshold:0.5

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});