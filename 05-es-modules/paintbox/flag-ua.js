import { Rectangle } from './square.js';

export default function Flag(canvasId, x, y) {
    Rectangle(canvasId, x, y, 60, 20, 'blue');
    Rectangle(canvasId, x, y+20, 60, 20, 'yellow');
}

