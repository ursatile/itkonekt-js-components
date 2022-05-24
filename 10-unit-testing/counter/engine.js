export default class CountingEngine {
    constructor(count) {
        this.initialValue = Math.max(parseInt(count) || 0, 0);
        this.reset();
    }
    
    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    reset() {
        this.count = this.initialValue;
    }
}