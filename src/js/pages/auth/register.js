/* eslint-disable no-undef */
import Auth from '../../network/auth';
import CheckUserAuth from './check-user-auth';

const Register = {
  async init () {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener () {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false
    );
  },

  async _getRegistered () {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
      const btnSubmit = document.getElementById('btn-submit');
      const btnLoading = document.getElementById('btn-loading');
      btnSubmit.classList.add('d-none');
      btnLoading.classList.remove('d-none');
      try {
        const response = await Auth.register({
          name: formData.name,

          email: formData.email,
          password: formData.password
        });
        if (response) {
          btnSubmit.classList.remove('d-none');
          btnLoading.classList.add('d-none');
          window.alert('Registered a new user');
        }

        this._goToLoginPage();
      } catch (error) {
        btnSubmit.classList.remove('d-none');
        btnLoading.classList.add('d-none');
        alert(error.response.data.message);
      }
    }
  },

  _getFormData () {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,

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

  _goToLoginPage () {
    window.location.href = '/auth/login.html';
  }
};

export default Register;
