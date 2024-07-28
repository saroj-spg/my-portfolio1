const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});



//typing text js
const text = "WELCOME TO SPG OFFICIAL WEBSITE";
const speed = 150; // Speed of typing in milliseconds

function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener("DOMContentLoaded", () => {
    const typingTextElement = document.getElementById('typing-text');
    typeWriter(typingTextElement, text, speed);
});
