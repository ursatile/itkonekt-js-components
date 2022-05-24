export class Cell {
    constructor(row, col, engine) {
        this.row = row;
        this.col = col;
        this.engine = engine;
    }

    okToFall() {
        return this.engine.okToMoveIntoCell(this.row + 1, this.col);
    }

    okToMoveLeft() {
        return this.engine.okToMoveIntoCell(this.row, this.col - 1);
    }

    okToMoveRight() {
        return this.engine.okToMoveIntoCell(this.row, this.col + 1);
    }

    moveLeft() {
        this.col--;
    }
    moveRight() {
        this.col++;
    }

    fall() {
        let ok = this.okToFall();
        if (ok)
            this.row++;
        return ok;
    }
}
