import Rectangle from './rectangle.js';

function Square(canvasId, x,y,size,color) {
    // A square is just a special rectangle where width = height
    Rectangle(canvasId,x,y,size,size,color);
}

export { Square, Rectangle }