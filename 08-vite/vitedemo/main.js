import './style.scss'

import * as English from './greetings-en.js';
import * as Serbian from './greetings-sr.js';

// document.querySelector('#app').innerHTML = `
// <h1>${ English.SayHello('ITKonekt')}</h1>
// <h1>${ Serbian.SayHello('ITKonekt')}</h1>
// <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

document.querySelector("div#en h1").innerHTML = English.SayHello('ITKonekt');
document.querySelector("div#sr h1").innerHTML = Serbian.SayHello('ITKonekt');
