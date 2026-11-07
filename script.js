
function showMessage() {
    alert("Welcome to my portfolio! Thanks for visiting.");
}

// Contact Form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();
});

// Console message
console.log("Portfolio website loaded successfully!");
