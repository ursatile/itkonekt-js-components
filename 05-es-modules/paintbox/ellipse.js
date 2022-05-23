function Ellipse(canvasId, x, y, width, height, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x,y,width,height, 0, 0, Math.PI * 2);
    ctx.fill();
}

export default Ellipse;