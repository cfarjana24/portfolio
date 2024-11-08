    // main.js
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Portfolio website loaded successfully!");
    });

// Form submission event handler
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Example of form data submission using Fetch API
    fetch('https://formspree.io/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
    });

    // Clear the form after submission
    document.getElementById("contactForm").reset();
});