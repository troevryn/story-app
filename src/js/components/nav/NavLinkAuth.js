import LitWithoutShadowDom from '../base';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../../utils/utils';

class NavLinkAuth extends LitWithoutShadowDom {
  constructor () {
    super();
    updateWhenLocaleChanges(this);
  }

  _clearStorage () {
    Utils.destroyAllToken();
    window.location.href = '/auth/login.html';
  }

  render () {
    return html`
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle text-nowrap"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div class="me-2 d-inline-block">
            <img
              id="imgUserLogged"
              style="width: 30px;height: 30px"
              class="img-fluid rounded-pill"
              src="https://ui-avatars.com/api/?name=User%20Name&background=random"
              alt="User Name"
            />
          </div>
          <span id="nameUserLogged"></span>
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" href="/profile.html"> profile </a>
          <li
            class="dropdown-item cursor-pointer"
            id="userLogOut"
            @click=${() => this._clearStorage()}
          >
            ${msg('Keluar')}
          </li>
        </ul>
      </li>
    `;
  }
}

// eslint-disable-next-line no-undef
customElements.define('nav-link-auth', NavLinkAuth);
