import * as html from './html.js';

export default class Renderer {
    constructor(root) {
        this.root = root;
        this.spans = new Array();
    }

    render(engine) {

        this.root.appendChild(html.element('link', {
            rel: "stylesheet",
            href: "tetris.scss",
            type: "text/css"
        }));
        let grid = html.element('div', { class: 'tetris-grid'});
        for(let row = 0; row < engine.rows; row++) {
            let rowDiv = html.element('div');
            let rowSpans = new Array();
            for(let col = 0; col < engine.cols; col++) {
                let span = html.element('span');
                rowDiv.appendChild(span);
                rowSpans.push(span);
            }
            grid.appendChild(rowDiv);
            this.spans.push(rowSpans);
        }
        this.root.appendChild(grid);
    }
}