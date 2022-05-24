import * as Blocks from "./block.js";

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

    okToMoveIntoCell(row, col) {
        if (row < 0) return false;
        if (col < 0) return (false);
        if (row >= this.rows) return (false);
        if (col >= this.cols) return (false);

        // are we going to collide with another block?
        if (this.settledBlocks.some(block => block.isOccupyingCell(row, col))) return (false);

        return (true);
    }

    addBlock() {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                this.fallingBlock = new Blocks.IBlock(0, this.cols / 2, this); return;
            case 1:
                this.fallingBlock = new Blocks.JBlock(0, this.cols / 2, this); return;
            case 2:
                this.fallingBlock = new Blocks.OBlock(0, this.cols / 2, this); return;
            case 3:
                this.fallingBlock = new Blocks.LBlock(0, this.cols / 2, this); return;
        }
    }

    fall() {
        if (this.fallingBlock == null) return;
        var fell = this.fallingBlock.fall();
        if (fell) return (true);

        for (var row = this.rows - 1; row >= 0; row--) {
            while (this.clearRow(row));
        }

        this.settledBlocks.push(this.fallingBlock);
        this.addBlock();
    }

    moveLeft() {
        if (this.fallingBlock != null) this.fallingBlock.moveLeft();
    }

    moveRight() {
        if (this.fallingBlock != null) this.fallingBlock.moveRight();
    }

    clearRow(row) {
        for (let col = 0; col < this.cols; col++) {
            if (!this.blocks.some(block => block.isOccupyingCell(row, col))) return false;
        }
        this.blocks.forEach(block => block.clearRow(row));
        this.blocks.forEach(block => block.fall());
    }
}