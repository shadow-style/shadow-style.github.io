customElements.define('demo-style-vars', class extends HTMLElement {
    constructor() {
        super()
            .attachShadow({ mode: 'open' })
            .innerHTML = `
                    <style>
                       shadow-style-card,
                        .card {
                            display: block;
                            background: var(--demo-bg, #ccc);
                            color: var(--demo-text, black);
                            padding: var(--demo-padding, 10px);
                            border-radius: var(--demo-border-radius, 5px);
                            transition: all 0.3s ease;
                        }
                        .card h4 {
                            margin-bottom: 10px;
                        }
                    </style>
                    <shadow-style-card class="card">
                        <h4>🎨 Styled with CSS Variables</h4>
                        <p>This card uses CSS custom properties defined in the Global / Light DOM.</p>
                        <p>Change the theme using the buttons above!</p>
                    </shadow-style-card>
                `;
    }
});
