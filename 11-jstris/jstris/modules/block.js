import { Cell } from "./Cell";

class Block {
    constructor(engine) {
        this.engine = engine;
        this.cells = [];
    }

    isOccupyingCell(row, col) {
        return this.cells.some(c => c.row == row && c.col == col);
    }

    fall() {
        let ok = this.cells.every(cell => cell.okToFall());
        if (ok) this.cells.forEach(cell => cell.fall());
        return ok;
    }


    moveLeft() {
        if (this.cells.every(cell => cell.okToMoveLeft())) {
            this.cells.forEach(cell => cell.moveLeft());
        }
    }

    moveRight() {
        if (this.cells.every(cell => cell.okToMoveRight())) {
            this.cells.forEach(cell => cell.moveRight());
        }
    }

    get className() {
        return "block";
    }

    clearRow(row) {
        this.cells = this.cells.filter(c => c.row != row);
    }
}


class OBlock extends Block {
    constructor(row, col, engine) {
        super(engine);

        this.cells = [
            new Cell(row, col, engine),
            new Cell(row + 1, col, engine),
            new Cell(row, col + 1, engine),
            new Cell(row + 1, col + 1, engine),
        ];
    }
    get className() { return "o-block"; }
}

 class IBlock extends Block {
    constructor(row, col, engine) {
        super(engine);
        this.cells = [
            new Cell(row, col, engine),
            new Cell(row + 1, col, engine),
            new Cell(row + 2, col, engine),
            new Cell(row + 3, col, engine),
        ];
    }
    get className() { return "i-block"; }
}

 class JBlock extends Block {
    constructor(row, col, engine) {
        super(engine);

        this.cells = [
            new Cell(row, col, engine),
            new Cell(row + 1, col, engine),
            new Cell(row + 2, col, engine),
            new Cell(row + 2, col+1, engine),
        ];
    }
    get className() { return "j-block"; }
}

 class LBlock extends Block {
    constructor(row, col, engine) {
        super(engine);

        this.cells = [
            new Cell(row, col, engine),
            new Cell(row + 1, col, engine),
            new Cell(row + 2, col, engine),
            new Cell(row + 2, col+1, engine),
        ];
    }
    get className() { return "l-block"; }
}

export { LBlock, JBlock, OBlock, IBlock };