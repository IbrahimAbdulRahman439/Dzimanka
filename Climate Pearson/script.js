document.addEventListener('DOMContentLoaded', () => {
            
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.closest('.faq-item');
            faqItem.classList.toggle('active');
        });
    });
});


