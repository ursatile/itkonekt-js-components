import MyCounterElement from '../counter.js';

test('UpArrow key increments engine', () => {
    let counter = new MyCounterElement();
    counter.connectedCallback();
    counter.engine.increment = jest.fn();

    let fakeKeydownEvent = { code: "ArrowUp" };
    counter.handleKeydown(fakeKeydownEvent);

    expect(counter.engine.increment).toHaveBeenCalledTimes(1);
});

describe('Counter calls update after updating', () => {
    test('after increment', () => {
        let counter = new MyCounterElement();
        counter.connectedCallback();
        counter.renderer.update = jest.fn();
        counter.incrementButtonClick();
        expect(counter.renderer.update).toHaveBeenCalledTimes(1);
    });
})