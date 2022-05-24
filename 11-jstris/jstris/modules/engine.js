class Cell {
    constructor(row, col, engine) {
        this.row = row;
        this.col = col;
        this.engine = engine;
    }   

    okToFall() {
        return this.engine.okToMoveIntoCell(this.row+1,this.col);
    }
    
    fall() {
        let ok = this.okToFall();
        if (ok) this.row++;
        return ok;
    }
}

class Block {
    constructor(row, col, engine) {
        this.cells = [ new Cell(row,col,engine) ];
    }
    fall() {
        this.cells.forEach(cell => cell.fall());
    }

    get className() {
        return "block";
    }
}

export default class Engine {
    constructor(rows, cols) {
        this.rows = parseInt(rows) || 20;
        this.cols = parseInt(cols) || 10;
        this.fallingBlock = null;        
    }

    get blocks() {
        return [ this.fallingBlock ];
    };

    okToMoveIntoCell(row,col) {
        if (row >= this.rows) return(false);
        return(true);
    }

    addBlock() {        
        this.fallingBlock =  new Block(0, this.cols/2, this);
    }

    fall() {    
        if (this.fallingBlock != null) this.fallingBlock.fall();
    }
}