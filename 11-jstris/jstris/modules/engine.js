import { Block } from "./Block";

export default class Engine {
    constructor(rows, cols) {
        this.rows = parseInt(rows) || 20;
        this.cols = parseInt(cols) || 10;
        this.fallingBlock = null;        
        this.settledBlocks = [];
    }

    get blocks() {
        return this.settledBlocks.concat(this.fallingBlock);
    };

    okToMoveIntoCell(row,col) {
        if (row < 0) return false;
        if (col < 0) return (false);
        if (row >= this.rows) return (false);
        if (col >= this.cols) return (false);    
        
        // are we going to collide with another block?
        if (this.settledBlocks.some(block => block.isOccupyingCell(row,col))) return(false);

        return(true);
    }

    addBlock() {        
        this.fallingBlock =  new Block(0, this.cols/2, this);
    }

    fall() {    
        if (this.fallingBlock == null) return;
        var fell = this.fallingBlock.fall();
        if (fell) return (true);
        this.settledBlocks.push(this.fallingBlock);
        this.addBlock();
    }

    moveLeft() {
        if (this.fallingBlock != null) this.fallingBlock.moveLeft();
    }

    moveRight() {
        if (this.fallingBlock != null) this.fallingBlock.moveRight();
    }
}