import { LitElement, html, css } from "lit";
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class CardStory extends LitElement {
  static properties = {
    name: { type: String, reflect: true },
    description: { type: String, reflect: true },
    img: { type: String, reflect: true },
    date: { type: String, reflect: true },
    classes: { type: String, reflect: true },
  };
  constructor() {
    super();

    this.name = "";
    this.description = "";
    this.classes = "";
    this.img = "";
    this.date = "";

  }
 
  static styles = [
    css`
      .flip-card {
        background-color: transparent;
        width: 100%;
        height: 400px;
        perspective: 1000px;
        font-family: sans-serif;
      }

      .title {
        font-size: 1.5em;
        font-weight: 900;
        text-align: center;
        margin: 0;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }

      .flip-card-front,
      .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border: 1px solid coral;
        border-radius: 1rem;
      }

      .flip-card-front {
        background: linear-gradient(
          120deg,
          bisque 60%,
          rgb(255, 231, 222) 88%,
          rgb(255, 211, 195) 40%,
          rgba(255, 127, 80, 0.603) 48%
        );
        color: coral;
      }
      .flip-card-front p {
        z-index: 1;
      }

      .flip-card-back {
        background: linear-gradient(
          120deg,
          rgb(255, 174, 145) 30%,
          coral 88%,
          bisque 40%,
          rgb(255, 185, 160) 78%
        );
        color: white;
        transform: rotateY(180deg);
        z-index: 2;
      }

      .img-card {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: absolute;

        border-radius: 1rem;
      }
      .bg-trans {
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        position: absolute;
        z-index: 1;
        border-radius: 1rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="bg-trans"></div>
            <p class="title">${this.name}</p>
            <img src="${this.img}" class="img-card" />
            <p>${msg('layangkan saya')}</p>
          </div>
          <div class="flip-card-back">
            <p class="title">${this.description}</p>
            <p>${this.date}</p>

            <p>${msg('tinggalkan card')}</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("card-story", CardStory);
