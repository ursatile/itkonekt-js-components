function Rectangle(canvasId, x,y,width,height,color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
}

export default Rectangle;
