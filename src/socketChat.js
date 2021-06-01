import LoginWindow from './ui/loginWindow';
import ChatWindow from './ui/chatWindow';
import UserName from './ui/userName';

export default class SocketChat {
  constructor() {
    this.ui = {
      loginWindow: new LoginWindow(
        document.querySelector('#login'),
        this.onLogin.bind(this)
      ),
      chatWindow: new ChatWindow(
        document.querySelector('#chat'),
        this.onLogin.bind(this)
      ),
      userName: new UserName(
        document.querySelector('[data-role=user-name]')
      )
    }

    this.ui.loginWindow.show();
  }

  async onLogin(name) {
    this.ui.loginWindow.hide();
    this.ui.chatWindow.show();
    this.ui.userName.set(name);
  }
}