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
        this.engine.addBlock();
        this.renderer.render(this.engine);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    tick() {
        this.engine.fall();
        return this.renderer.update(this.engine);
    }

    handleKeydown(event) {
        console.log(event.code);
        switch(event.code) {
            case "Space": return this.tick();
        }
    }
}

customElements.define("jstris-game", JstrisGameElement);
