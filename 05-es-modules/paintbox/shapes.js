import { Ellipse, Circle } from './circle.js';
import { Square, Rectangle } from './square.js';

function HappyFace(canvasId, x,y) {
    Circle(canvasId, x, y, 50, 'orange');
    Circle(canvasId, x, y + 5, 30, 'black');
    Ellipse(canvasId, x, y - 5, 35, 30, 'orange');
    Circle(canvasId, x - 15, y - 10, 8, 'black');
    Circle(canvasId, x + 15, y - 10, 8, 'black');
}

function Flag(canvasId, x, y) {
    Rectangle(canvasId, x, y, 60, 15, 'black');
    Rectangle(canvasId, x, y+15, 60, 15, 'red');
    Rectangle(canvasId, x, y+30, 60, 15, 'gold');
}

function PinkFlower(canvasId, x, y) {
    Ellipse(canvasId, x-15, y, 20, 10, 'pink');
    Ellipse(canvasId, x+15, y, 20, 10, 'pink');
    Ellipse(canvasId, x, y-15, 10, 20, 'pink');
    Ellipse(canvasId, x, y+15, 10, 20, 'pink');
    Circle(canvasId, x, y, 15, 'orange');
}

export { HappyFace, Flag, PinkFlower };