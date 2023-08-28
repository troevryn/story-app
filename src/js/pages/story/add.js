/* eslint-disable no-undef */
import Transactions from '../../network/story';

const Add = {
  async init () {
    this._initialListener();
  },

  _initialListener () {
    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false
    );
  },

  async _sendPost () {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const formDataTemp = new FormData();
      const btnSubmit = document.getElementById('btn-submit');
      const btnLoading = document.getElementById('btn-loading');
      btnSubmit.classList.add('d-none');
      btnLoading.classList.remove('d-none');

      for (const key in formData) {
        // eslint-disable-next-line no-prototype-builtins
        if (formData.hasOwnProperty(key)) {
          formDataTemp.append(key, formData[key]);
        }
      }
      try {
        const response = (await Transactions.store(formDataTemp)).data;
        if (response) {
          btnSubmit.classList.remove('d-none');
          btnLoading.classList.add('d-none');

          window.alert('create story success');
          this._goToDashboardPage();
        }
      } catch (error) {
        console.log(error);
        btnSubmit.classList.remove('d-none');
        btnLoading.classList.add('d-none');
        alert(error.response.data.message);
      }
    }
  },

  _getFormData () {
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      photo: evidenceInput.files[0],
      description: descriptionInput.value
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

export default Add;
