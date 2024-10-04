document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const nameInput = document.getElementById('nameInput');
    const myPage = document.getElementById('myPage');
    const userName = document.getElementById('userName');
    const backButton = document.getElementById('backButton');

    // Håndter registrering
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Forhindrer at skjemaet sender en forespørsel
        const name = nameInput.value.trim();

        if (name) {
            showMyPage(name);
        }
    });

    // Håndter logging ut (gå tilbake til registreringsskjemaet)
    backButton.addEventListener('click', function () {
        registrationForm.reset(); // Tilbakestiller input-feltet
        showRegistrationForm();
    });

    // Vis "Min Side" med brukerens navn
    function showMyPage(name) {
        userName.textContent = name;
        myPage.classList.remove('hidden');
        registrationForm.classList.add('hidden');
    }

    // Vis registreringsskjemaet og skjul "Min Side"
    function showRegistrationForm() {
        myPage.classList.add('hidden');
        registrationForm.classList.remove('hidden');
    }
});
