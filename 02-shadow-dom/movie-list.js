// movie-list.js
class MovieListElement extends HTMLElement {
    constructor() {
      super();
      this._closed_root = this.attachShadow({mode: 'closed'});
    }
    connectedCallback() {
        this._closed_root.innerHTML = `
        <ul>
        <li>Alien</li>
        <li>Back to the Future</li>
        <li>Dirty Dancing</li>
        <li>Jumanji</li>
        <li>Zoolander</li>
        </ul>`;
    }
  }
  
  customElements.define('movie-list', MovieListElement);