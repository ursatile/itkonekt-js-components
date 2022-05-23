// movie-list.js;
class MovieListElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        // option 1: inline style element
        // let style = document.createElement('style');
        // style.innerHTML = `
        // li {
        //     font-family: Times New Roman;
        //     color: #600;
        // }`;
        // this.shadowRoot.appendChild(style);

        // option 2: link to external CSS
let link = document.createElement('link');
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");
link.setAttribute("href", "movies.css");
        this.shadowRoot.appendChild(link);

        let ul = document.createElement('ul');
        let movies = ['Alien', 'Back to the Future', 'Casablanca', 'Dirty Dancing', 'Jumanji'];
        movies.forEach(function (value, index) {
            let li = document.createElement('li');
            li.innerText = value;
            ul.appendChild(li);
        });
        this.shadowRoot.appendChild(ul);
    }
}

customElements.define('movie-list', MovieListElement);