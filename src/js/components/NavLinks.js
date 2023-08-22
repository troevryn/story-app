import LitWithoutShadowDom from './base';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
 
class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
 
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="${msg(`Dasbor`)}" to="/"></nav-link>
        <nav-link content="${msg(`Tambah Data`)}" to="/story/add.html"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link content="robby" to="/profile.html"></nav-link>
      </ul>
    `;
  }
}
 
customElements.define('nav-links', NavLinks);