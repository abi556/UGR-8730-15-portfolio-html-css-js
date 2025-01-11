// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // EmailJS Contact Form Submission
    emailjs.init("ypGAcb78q3aeqvHlm");

    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            emailjs.sendForm('service_gnd13ef', 'template_c16lj08', this)
                .then(function() {
                    alert('Message sent successfully!');
                }, function(error) {
                    alert('Failed to send message: ' + JSON.stringify(error));
                });
        });
    }
});
