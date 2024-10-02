const form = document.getElementById('contact-form')
const popup = document.getElementById('kontakt-popup')
const overlay = document.getElementById('kontakt-overlay')
const closePopup = document.getElementById('close-popup')

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Vis popup og overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // reset skjema
    form.reset();

    // // Refresh siden etter 2 sekunder
    // setTimeout(function() {
    //     location.reload();
    // }, 2000); // 2 sekunder delay
});

// lukk popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

