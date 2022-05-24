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

    fall() {
        if (this.cells.every(cell => cell.okToFall())) {
            this.cells.forEach(cell => cell.fall());
            return true;
        }
        return false;
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
