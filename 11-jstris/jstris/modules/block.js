import { Cell } from "./Cell";

export class Block {
    constructor(row, col, engine) {
        this.cells = [
            new Cell(row, col, engine),
            new Cell(row + 1, col, engine),
            new Cell(row, col + 1, engine),
            new Cell(row + 1, col + 1, engine),
        ];
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
}
