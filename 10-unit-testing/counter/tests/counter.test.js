import MyCounterElement from '../counter.js';

test('UpArrow key increments engine', () => {
    let counter = new MyCounterElement();
    counter.connectedCallback();

    let fakeKeydownEvent = { code: "ArrowUp" };
    counter.handleKeydown(fakeKeydownEvent);

    expect(counter.engine.count).toBe(1);
});