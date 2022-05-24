import * as html from './html.js';
import './counter.scss';

export default class Renderer {
    constructor(shadowRoot) {
        this.shadowRoot = shadowRoot;
    }

    render(engine) {
        const cssLink = html.element('link', { type: "text/css", rel: "stylesheet", href: "counter.scss" });
        this.shadowRoot.appendChild(cssLink);

        let wrapper = html.element('div', { 'class': "counter-wrapper"});

        this.decrementButton = html.element('button', {}, '▼');
        wrapper.appendChild(this.decrementButton);

        this.span = html.element('span', { "id": "counter" });
        let counter = html.element('div', {"class": "counter" });

        counter.appendChild(this.span);
        wrapper.appendChild(counter);

        this.incrementButton = html.element('button', {}, '▲');
        wrapper.appendChild(this.incrementButton);

        this.resetButton = html.element('button', { id: 'reset-button' }, 'Reset');
        wrapper.appendChild(this.resetButton);

        this.shadowRoot.appendChild(wrapper);
        this.update(engine);
    }

    update(engine) {
        this.span.innerHTML = engine.count;
    }
}