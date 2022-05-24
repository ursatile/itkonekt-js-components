import Engine from './engine.js';
import Renderer from './renderer.js';

export default class JstrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

    }
    connectedCallback() {
        let rows = this.getAttribute("rows");
        let cols = this.getAttribute("cols");
        this.engine = new Engine(rows, cols);
        this.renderer = new Renderer(this.shadowRoot);
        this.renderer.render(this.engine);
    }
}

customElements.define("jstris-game", JstrisGameElement);
