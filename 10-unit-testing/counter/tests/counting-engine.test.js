import CountingEngine from '../engine.js';

test('Counting engine initialises 5', () => {
    let engine = new CountingEngine(5);
    expect(engine.initialValue).toBe(5);
});
