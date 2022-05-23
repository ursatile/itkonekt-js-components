import { Rectangle } from './square.js';

export default function Flag(canvasId, x, y) {
    Rectangle(canvasId, x, y, 20, 40, 'blue');
    Rectangle(canvasId, x+20, y, 20, 40, 'gold');
    Rectangle(canvasId, x+40, y, 20, 40, 'red');
}
