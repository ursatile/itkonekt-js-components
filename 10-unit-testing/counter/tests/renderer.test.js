import CountingEngine from '../engine.js';
import Renderer from '../renderer.js';

describe('Renderer draws initial value correctly', () => {
    const values = [0, 1, 5, 10, 99999999];
    test.each(values)('when initialValue is %p', value => {
        let root = document.createElement("div");
        let renderer = new Renderer(root);
        let engine = new CountingEngine(value);
        renderer.render(engine);    
        let span = root.querySelector("span#counter");
        expect(span.innerHTML).toBe(value.toString());
    });
});
