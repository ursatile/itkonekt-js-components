export default class Engine {
    constructor(rows, cols) {
        this.rows = parseInt(rows) || 20;
        this.cols = parseInt(cols) || 10;
    }
}