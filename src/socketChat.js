import Chat from "./Chat";
import LoginTemplate from "./templates/login.hbs";

export default class socketChat {
  constructor() {
    this.socket = new WebSocket("ws://localhost:8080");
    this.chat = new Chat();
    this.onInit();
  }

  onInit() {
    this.socket.addEventListener('message', function (event) {
      this.chat.addMessage(event.data);
      // console.log(event);
    });
    this.socket.addEventListener('error', function() {
        alert('Соединение закрыто или не может быть открыто');
    });
  }



}