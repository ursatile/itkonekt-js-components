class MyCounterElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.count = parseInt(this.getAttribute("initial-value"));
        this.initialCount = this.count;

        const cssLink = document.createElement('link');
        cssLink.setAttribute("type", "text/css");
        cssLink.setAttribute("rel", "stylesheet");
        cssLink.setAttribute("href", "counter.css");
        this.shadowRoot.appendChild(cssLink);
        let wrapper = document.createElement('div');
        wrapper.setAttribute("class", "counter-wrapper");
        let incrementButton = document.createElement('button');
        incrementButton.innerHTML = '▲';
        let decrementButton = document.createElement('button');
        decrementButton.innerHTML = '▼';
        this.span = document.createElement('span');
        this.span.setAttribute("id", "counter");
        this.span.innerHTML = this.count;
        let counter = document.createElement('div');
        counter.setAttribute("class", "counter");
        counter.appendChild(this.span);
        wrapper.appendChild(decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(incrementButton);
        let resetButton = document.createElement('button');
        resetButton.setAttribute('id', 'reset-button');
        resetButton.innerHTML = 'Reset';
        wrapper.appendChild(resetButton);
        this.shadowRoot.appendChild(wrapper);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
        incrementButton.addEventListener("click", this.incrementButtonClick.bind(this));
        decrementButton.addEventListener("click", this.decrementButtonClick.bind(this));
        resetButton.addEventListener("click", this.resetButtonClick.bind(this));
    }

    incrementButtonClick(event) {
        this.count++;
        this.span.innerHTML = this.count;
    }

    decrementButtonClick(event) {
        this.count--;
        this.span.innerHTML = this.count;
    }
    resetButtonClick(event) {
        this.count = this.initialCount;
        this.span.innerHTML = this.count;
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowUp": this.count++; this.span.innerHTML = this.count; break;
            case "ArrowDown": this.count--; this.span.innerHTML = this.count; break;
            default: return;
        }
    }
}

customElements.define("my-counter", MyCounterElement);