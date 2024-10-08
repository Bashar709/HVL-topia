document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.getElementById('kontakt-popup').style.display = 'block'; 
    });
    document.getElementById('close-popup-btn').addEventListener('click', function() {
        document.getElementById('kontakt-popup').style.display = 'none'; 
        document.getElementById('registrationForm').reset(); 
    });
});
