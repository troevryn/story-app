import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base';

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    label: { type: String, reflect: true },
    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
    min: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
    showPassword: { type: Boolean, reflect: true }
  };

  constructor () {
    super();
    this._checkAvailabilityProperty();
    this.showPassword = false;
    this.type = 'text';
    this.required = false;
    this.label = '';
  }

  _checkAvailabilityProperty () {
    if (!this.hasAttribute('invalidFeedbackMessage')) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`
      );
    }
  }

  render () {
    return html`
      <label for="${this.inputId}" class="form-label">${this.label}</label>

      <div class="input-group">
        <input
          id=${this.inputId || nothing}
          class="form-control"
          type=${this.type}
          value=${this.value || nothing}
          ?required=${this.required}
          minlength=${this.min}
          @input=${(e) => (this.value = e.target.value)}
        />
        ${this._showButtonPassword()} ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }

  _validFeedbackTemplate () {
    if (this.validFeedbackMessage) {
      return html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }

    return html``;
  }

  _showButtonPassword () {
    // console.log(this.showPassword,'coba')
    if (this.showPassword) {
      if (this.type === 'text') {
        return html`
          <div
            class="btn btn-secondary"
            @click=${() => this._clickShowButton()}
          >
            <i class="bi bi-eye-slash"></i>
          </div>
        `;
      } else {
        return html`
          <div
            class="btn btn-secondary"
            @click=${() => this._clickShowButton()}
          >
            <i class="bi bi-eye"></i>
          </div>
        `;
      }
    }

    return html``;
  }

  _clickShowButton () {
    if (this.type === 'text') {
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
}

// eslint-disable-next-line no-undef
customElements.define('input-with-validation', InputWithValidation);
