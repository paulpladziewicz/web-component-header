
class Header extends HTMLElement {
    static get observedAttributes() {
        return ['title'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.defaultTitle = 'Welcome to the Platform'
        this.shadowRoot.innerHTML = `
            <style>
                @import "./web-component-styles.css";
            </style>
            <header>
                <span id="title">${this.title || this.defaultTitle}</span>
            </header>
        `;
    }

    get title() {
        return this.getAttribute('title');
    }

    set title(value) {
        this.setAttribute('title', value)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title') {
            this.shadowRoot.querySelector('#title').textContent = newValue;
        }

    }

    connectedCallback() {
        console.log('web component header added to the DOM')
    }

    disconnectedCallback() {
        console.log('web component header removed to the DOM')
    }

    resetTitle() {
        this.title = this.defaultTitle;
    }
}

customElements.define('platform-header', Header);