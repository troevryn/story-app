import { LitElement, html, css } from "lit";
import LitWithoutShadowDom from "./base";

class TitleButton extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
    labelButton: { type: String, reflect: true },   
  };
  constructor() {
    super();

    this.title = "";
    this.labelButton = "";
   

  }
 
 

  render() {
    return html`
    <div class="d-flex justify-content-between align-items-center">
    <h1>${this.title}</h1>
    <a class="btn btn-primary text-capitalize" href="story/add.html">
      <i class="bi bi-plus-lg me-1"></i>${this.labelButton}
    </a>
  </div>
    `;
  }
}
customElements.define("title-button", TitleButton);
