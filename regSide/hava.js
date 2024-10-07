document.addEventListener('DOMContentLoaded', function() {
    // Show the popup when the form is submitted
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        document.getElementById('kontakt-popup').style.display = 'block'; // Show the popup
    });

    // Close the popup when the close button is clicked
    document.getElementById('close-popup-btn').addEventListener('click', function() {
        document.getElementById('kontakt-popup').style.display = 'none'; // Hide the popup
        document.getElementById('registrationForm').reset(); // Reset the form fields
    });
});
