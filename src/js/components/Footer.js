import LitWithoutShadowDom from "./base";
import { LitElement, css, html } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class FooterApp extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  static styles = [
    css`
      .footer {
        padding: 2rem;
        background-color: #0d6efd;
        color: white;
        text-align: center;
      }
    `,
  ];

  render() {
    return html`
      <div class="footer">
        <locale-picker class="d-block mb-3"></locale-picker>

        <p>${msg(`Dibuat dengan ❤ oleh Robby`)}</p>
      </div>
    `;
  }
}

customElements.define("footer-app", FooterApp);
