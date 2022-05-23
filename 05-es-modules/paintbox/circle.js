import Ellipse from './ellipse.js';

function Circle(canvasId, x,y,size,color) {
    // A circle is just a special ellipse where width = height
    Ellipse(canvasId,x,y,size,size,color);
}

export { Ellipse, Circle };