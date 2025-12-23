// Web Components used in above demo
customElements.define('demo-inject', class extends HTMLElement {
    constructor() {
        super()
            .attachShadow({ mode: 'open' })
            .innerHTML = 
                `<style id="main-style">
                    inject-card {
                        display: block;
                        background: linear-gradient(135deg, rebeccapurple 0%, cornflowerblue 100%);
                        color: white;
                        padding: 5px 20px;
                        border-radius: 8px;
                        margin: 10px;
                        box-shadow: 0 4px 6px grey;
                        transition: all 0.3s ease;
                    }
                </style>
                <inject-card>
                    <h4>💉 Injectable Shadow Root</h4>
                    <p>This has an open shadow root. External scripts can inject styles directly!</p>
                    <p>Click the buttons above to inject custom styles into this component.</p>
                </inject-card>`;
    }
});