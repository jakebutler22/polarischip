import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      description: { type: String }
    };
  }

  constructor() {
    super();
    this.title = 'Cool hockey tourney';
    this.image = 'https://raw.githubusercontent.com/jakebutler22/usahockeypicture/refs/heads/main/IMG_0416.jpeg';
    this.alt = 'Photo of Jake Butler playing hockey';
    this.description =
      'Playing hockey and inevitably lose to the Canadians. Change the title and picture for a happy dog.';
  }

  static get styles() {
    return css`
      :host {
        font-size: 16px;
      }

      /* controls */
      .control-wrapper {
        margin-bottom: 16px;
      }

      /* card container */
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid gray;
        box-shadow: 0 4px 8px rgba(1,1,1,1);
        margin: 8px;
        padding: 8px;
        background-color: green;
        opacity: 0.85;
        transition: 0.6s all ease-in-out;
      }

      /* card image */
      .card-image {
        width: 400px;
        height: 100%;
      }

      /* card text wrapper */
      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }

      /* hover and focus state */
      .card:hover {
        opacity: 1;
      }

      /* background toggle class */
      .card.fancy {
        background-color: red;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img
          class="card-image"
          src="${this.image}"
          alt="${this.alt}"
        />
        <div class="card-text">
          <h3 class="card-title">${this.title}</h3>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
