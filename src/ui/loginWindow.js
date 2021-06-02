export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = document.querySelector('[data-role=login-name-input]');
    const submitButton = document.querySelector('[data-role=login-submit]');
    const loginError = document.querySelector('[data-role=login-error]');

    const logIn = () => {
      loginError.textContent = '';

      const name = loginNameInput.value.trim();

      if (!name) {
        loginError.textContent = 'Введите никнейм';
      } else {
        this.onLogin(name);
      }
    }

    submitButton.addEventListener('click', logIn);
    loginNameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        logIn();
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }
  
  hide() {
    this.element.classList.add('hidden');
  }
}