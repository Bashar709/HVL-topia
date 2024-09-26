document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const myPage = document.getElementById('myPage');
    const userName = document.getElementById('userName');

    // Sjekk om det allerede er lagret et navn i localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
        showMyPage(storedName);
    }

    // Håndter registrering
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Forhindrer at skjemaet sender en forespørsel
        const name = nameInput.value.trim();

       
    });

    // Vis "Min Side" med brukerens navn
    function showMyPage(name) {
        userName.textContent = name;
        myPage.classList.remove('hidden');
        registrationForm.classList.add('hidden');
    }
});
