export default class MessageSender {
  constructor(element, onSend) {
    this.onSend = onSend;
    this.messageInput = element.querySelector('[data-role=message-input]');
    this.messageSendButton = element.querySelector('[data-role=message-send-button]');

    const sendMessage = () => {
      const message = this.messageInput.value.trim();

      if (message) {
        this.onSend(message);
      }
    }
    this.messageSendButton.addEventListener('click', sendMessage);
    this.messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  clear() {
    this.messageInput.value = '';
  }
}