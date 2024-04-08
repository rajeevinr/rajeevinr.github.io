document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        // You can customize this part to send the form data to your desired endpoint
        // For demonstration, let's just log the form data to the console
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // Optionally, you can add code to clear the form fields after submission
        form.reset();
    });
});
