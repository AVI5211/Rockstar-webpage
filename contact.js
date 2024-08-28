document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your user ID
    emailjs.init("your_public_key_here");

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Check if all fields are filled
        if (name && email && message) {
            // Send the email using EmailJS
            emailjs.send("your_service_id_here", "your_template_id_here", {
                from_name: name,
                from_email: email,
                message: message,
            }).then(function(response) {
                // Success message or animation
                alert("Message Sent Successfully!");
                form.reset(); // Reset the form after submission
            }, function(error) {
                // Handle error
                alert("Failed to send message. Please try again.");
            });
        } else {
            alert("Please fill out all fields before sending the message.");
        }
    });
});
