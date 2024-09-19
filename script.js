// Simulerer svar basert på brukerinput
const botResponses = {
    "hei": "Denne chatBotten er et primitivt eksempel på en chatbot, skriv (Hva kan jeg gjøre?) for å se ulike kommandoer du kan skrive.",
    "hva kan jeg gjøre?": "Dette er utvalget av kommandoer: Hva er dette nettstedet?, Hvordan fungerer nettsiden?, Hvem har leget denne nettsiden?",
    "hvordan fungerer nettsiden?": "Denne nettsiden er en enkel demo av nettstedet som skal designes. Nettsiden bruker elementer hovedsakelig fra HTML og CSS, men også litt javascript.",
    "hva er dette nettstedet?": "Dette nettstedet er HVLtopia, et nettsted dom fokuserer på bærekraft og sammfunnsansvar",
    "hvem har laget denne nettsiden?": "Denne nettssiden er laget av: Mats Rui, Teodor Ørjansen, Nadia Lambrecht, Jenny Hopland, Alex Jakobsen, Bashar Mohamad og Andreas Ødegård"
};

// Elementer fra HTML
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

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
