import CountingEngine from '../engine.js';

describe('Counting engine initialises', () => {
    describe('with valid initial values', () => {
        const values = [0, 1, 5, 10, 99999999];
        test.each(values)('when initialValue is %p', value => {
            let engine = new CountingEngine(value);
            expect(engine.initialValue).toBe(value);        
        });
    });
    describe('with invalid initial values', () => {
        const values = [null, NaN, -10, 'bob', new Date(), "", {}];
        test.each(values)('when initialValue is %p', value => {
            let engine = new CountingEngine(value);
            expect(engine.initialValue).toBe(0);  
        });
    });
});

test('Increment works', () => {
    let engine = new CountingEngine(5);
    engine.increment();
    expect(engine.count).toBe(6);
});

test('Decrement works', () => {
    let engine = new CountingEngine(5);
    engine.decrement();
    expect(engine.count).toBe(4);
});

test('Reset works', () => {
    let engine = new CountingEngine(5);
    engine.increment();
    expect(engine.count).not.toBe(5);
    engine.reset();
    expect(engine.count).toBe(5);
});