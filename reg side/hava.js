document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); 

    document.getElementById('registrationForm').style.display = 'none';

    document.getElementById('confirmationMessage').style.display = 'block';
};
