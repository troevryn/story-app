/* eslint-disable no-undef */
import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from './check-user-auth';

const Login = {
  async init () {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener () {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false
    );
  },

  async _getLogged () {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const btnSubmit = document.getElementById('btn-submit');
      const btnLoading = document.getElementById('btn-loading');
      btnSubmit.classList.add('d-none');
      btnLoading.classList.remove('d-none');

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password
        });
        Utils.setUserToken(
          Config.USER_TOKEN_KEY,
          response.data.loginResult.token
        );
        Utils.setUserToken(
          Config.USERNAME_KEY,
          response.data.loginResult.name
        );
        btnSubmit.classList.remove('d-none');
        btnLoading.classList.add('d-none');

        window.alert('Signed user in detected');

        this._goToDashboardPage();
      } catch (error) {
        console.log(error);
        btnSubmit.classList.remove('d-none');
        btnLoading.classList.add('d-none');
        alert(error.response.data.message);
      }
    }
  },

  _getFormData () {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      email: email.value,
      password: password.value
    };
  },

  _validateFormData (formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === ''
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage () {
    window.location.href = '/';
  }
};

export default Login;
