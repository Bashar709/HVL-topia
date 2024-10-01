document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Hide the form
    document.getElementById('registrationForm').style.display = 'none';

    // Show the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
};
