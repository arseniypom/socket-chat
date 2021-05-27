import ChatTemplate from "./templates/chat.hbs";

export default class Chat {
  constructor() {
    this.sendButton = document.querySelector('#message-send');
    this.chatWindow = document.querySelector('#chat-window');
    this.messageText = document.querySelector('#message-text');
    this.onInit();
  }

  onInit() {
    this.sendButton.addEventListener('click', this.sendMessage);
    this.messageText.addEventListener('change', this.sendMessage);
  }

  isLoggedIn() {
    console.log(this.cookies);
  }

  addMessage(message) {
    const messageItem = document.createElement('li');

    messageItem.className = "chat-window-message";
    messageItem.textContent = message;

    chatWindow.innerHTML = ChatTemplate(messageItem);

    // messageContainer.appendChild(messageItem);
    // messageContainer.scrollTop = messageContainer.scrollHeight;
  }

  sendMessage() {
    this.socket.send(this.messageText.value);
    this.messageText.value = '';
  }
}