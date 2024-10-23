// Simulerer svar basert på brukerinput
const botResponses = {
    "hei": "Denne chatBotten er et primitivt eksempel på en chatbot, skriv (Hva kan jeg gjøre?) for å se ulike kommandoer du kan skrive.",
    "hva kan jeg gjøre?": "Dette er utvalget av kommandoer: Hva er dette nettstedet?, Hvordan fungerer nettsiden?, Hvem har leget denne nettsiden?",
    "hvordan fungerer nettsiden?": "Denne nettsiden er en enkel demo av nettstedet som skal designes. Nettsiden bruker elementer hovedsakelig fra HTML og CSS, men også litt javascript.",
    "hva er dette nettstedet?": "Dette nettstedet er HVLtopia, et nettsted dom fokuserer på bærekraft og sammfunnsansvar",
    "hvem har laget denne nettsiden?": "Denne nettssiden er laget av: Mats Rui, Teodor Ørjansen, Nadia Lambrecht, Jenny Hopland, Alex Jakobsen, Bashar Mohamad og Andreas Ødegård",
    "1":"hva handler spørsmålet om? Skriv a, b eller c. a. Jeg ønsker å vite hva prosjektet handler om. b. Jeg ønsker å vite hva dere gjør i prosjektet. c. Annet",
    "2":"Du kan enten sende mail om dette til vår tech-support eller ringe han hvis vi er tilgjengelige. kontaktinformasjon finner du under 'om oss - bashar'",
    "3":"Hvis spørsmålet gjelder noe annet kan du prøve å kontakte prosjektleder gjennom mail eller telefon som står under",
    "a":"Du kan gå inn på siden 'om prosjektet' for å lese om vår bakgrunn, visjon, mål og vår hensikt med prosjektet, skriv igjen om du har andre spørsmål",
    "b":"Du kan gå inn på siden 'om prosjektet' eller 'løsning' for å lese mer om ferdige prosjekter, pågående prosjekter og fremtidige prosjekter, skriv igjen om du har andre spørsmål",
    "c":"Hvis spørsmålet gjelder noe annet kan du prøve å kontakte prosjektleder gjennom mail eller telefon som står under",
    "igjen":" hvilket av utsagnene passer ditt problem best, skriv 1, 2 eller 3. 1. Jeg har et spørsmål om prosjektet 2. Jeg har et spørsmål om nettsiden 3. Annet"
};

// Elementer fra HTML
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// automatisk åpner chatbot popup når side åpnes
window.onload = function() {
    document.getElementById("bot-popup-form").style.display = "block"
    document.getElementById("openChatBtn").style.display = "none";
}

// minimize popup
function minimizeChat() {
    document.getElementById("bot-popup-form").style.display = "none";
    document.getElementById("openChatBtn").style.display = "block";
}

// åpne popup etter minimisering
function openChat() {
    document.getElementById("bot-popup-form").style.display = "block";
    document.getElementById("openChatBtn").style.display = "none";
}

// Legg til melding i chat-boksen
function addMessage(content, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = content;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll til bunn
}

// Håndterer brukerinput
function handleUserInput() {
    const userMessage = userInput.value.toLowerCase();
    addMessage(userMessage, 'user-message');
    userInput.value = ''; // Tøm input-feltet

    // Sjekk om boten har et forhåndsdefinert svar
    if (botResponses[userMessage]) {
        setTimeout(() => {
            addMessage(botResponses[userMessage], 'bot-message');
        }, 1000); // Botens svar kommer etter 1 sekund
    } else {
        setTimeout(() => {
            addMessage("Beklager, jeg forstår ikke spørsmålet ditt.", 'bot-message');
        }, 1000);
    }
}

// Event Listener for Send-knappen
sendBtn.addEventListener('click', handleUserInput);

// Aktiver Enter-tast for å sende melding
userInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

document.querySelector('.knapp').addEventListener('click', function() {
    let chatContainer = document.querySelector('.chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
});
