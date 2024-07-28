let service_group = document.querySelector('.service-group');
let options = document.querySelector('.op-t');
let chat = document.querySelector('.chat-window');
let btnChat = document.querySelector('.button-flut');
let closeBtn = document.querySelector('.chat-window header svg');
let mesg = document.querySelector('.message');
let sendBtn = document.querySelector('.send-svg');
let inputField = document.querySelector('.send-group input');
let chatContent = document.querySelector('.chat-content');

service_group.addEventListener('click', () => {
    options.classList.toggle('hidden');
});


btnChat.addEventListener('click', () => {
    chat.classList.toggle('hidden');
    let initialMessage = chatContent.querySelector('.robot-message');

    // Limpar todas as mensagens, exceto a mensagem inicial
    chatContent.innerHTML = ''; // Limpa todas as mensagens

    // Adicionar a mensagem inicial de volta, se ela existir
    if (initialMessage) {
        chatContent.appendChild(initialMessage);
    }
    if (!chat.classList.contains('hidden')) {
        mesg.classList.add('hidden');
    }
});

closeBtn.addEventListener('click', () => {
    chat.classList.add('hidden');

    let initialMessage = chatContent.querySelector('.robot-message');

    // Limpar todas as mensagens, exceto a mensagem inicial
    chatContent.innerHTML = ''; // Limpa todas as mensagens

    // Adicionar a mensagem inicial de volta, se ela existir
    if (initialMessage) {
        chatContent.appendChild(initialMessage);
    }
});

btnChat.addEventListener('mouseover', () => {
    if (chat.classList.contains('hidden')) {
        mesg.classList.remove('hidden');
    }
});

btnChat.addEventListener('mouseout', () => {
    mesg.classList.add('hidden');
});

sendBtn.addEventListener('click', () => {
    let message = inputField.value.trim();
    if (message !== '') {
        let messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;
        chatContent.appendChild(messageElement);
        inputField.value = '';
        chatContent.scrollTop = chatContent.scrollHeight; // Rola para o fim da área de mensagens
    }
});