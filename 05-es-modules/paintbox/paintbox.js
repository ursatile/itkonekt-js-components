import { HappyFace, Flag as GermanFlag, PinkFlower } from './shapes.js';
import UkrainianFlag from './flag-ua.js';
import RomanianFlag from './flag-ro.js';

document.getElementById('canvas').addEventListener("click", drawShape);
document.querySelectorAll('input[type=radio]').forEach(input => input.addEventListener("change", chooseShape));
window.shape = 'happy-face';

function chooseShape(e) {
    let radio = e.target;
    if (radio.checked) window.shape = radio.value;
}

function drawShape(e) {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    switch (window.shape) {
        case 'happy-face': return HappyFace('canvas', x, y);
        case 'flag-ro': return RomanianFlag('canvas', x, y);
        case 'flag-de': return GermanFlag('canvas', x, y);
        case 'flag-ua': return UkrainianFlag('canvas', x, y);
        case 'pink-flower': return PinkFlower('canvas', x, y);
    }
}
