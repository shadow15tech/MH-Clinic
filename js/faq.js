// ==========================================
// PREMIUM FAQ ACCORDION
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Close all FAQs
        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        // Open clicked FAQ
        if (!isActive) {
            item.classList.add("active");
        }

    });

});