/* Inside Shadow DOM - inherits from parent */
customElements.define("demo-inheritable", class extends HTMLElement {
    constructor() {
        super() // sets AND returns 'this' scope
            .attachShadow({ mode: 'open' }) // sets AND returns this.shadowRoot
            .innerHTML = `<p>✨ This text inherits color and font settings from the parent container!</p>`;
    }
});
