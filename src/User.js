export default class User {
  constructor() {
    this.cookies = document.cookie.split('; ').reduce((acc, curr) => {
      const [name, value] = curr.split('=');
      acc[name] = value;
      return acc;
    }, {});
  }

  logIn(cookieValue) {
    document.cookie = `username=${cookieValue}`;
  }

  sendMessage() {
    
  }
}