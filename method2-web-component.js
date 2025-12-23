// Web Components used in demo using CSS Variables defined *outside* the shadow DOM
customElements.define('demo-css-vars', class extends HTMLElement {
    constructor() {
        super()
            .attachShadow({ mode: 'open' })
            .innerHTML = `
                    <style>
                       styled-card {
                            display: block;
                            /* using CSS variables and optional default values */
                            background: var(--demo-bg, grey);
                            color: var(--demo-text, black);
                            padding: var(--demo-padding, 10px);
                            border-radius: var(--demo-border-radius, 5px);
                            transition: all 0.3s ease;
                        }
                    </style>
                    <styled-card>
                        <h4>🎨 Styled with CSS Variables</h4>
                        <p>This card uses CSS custom properties defined in the Global / Light DOM.</p>
                        <p>Change the theme using the buttons above!</p>
                    </styled-card>`;
    }
});
// ========================================================== #2 Change theme function for CSS Variables demo
function changeTheme(theme) {
    const container = document.querySelector('#method2 demo-css-vars');
    switch (theme) {
        case 'blue':
            container.style.setProperty('--demo-bg', 'navy');
            container.style.setProperty('--demo-text', 'white');
            break;
        case 'green':
            container.style.setProperty('--demo-bg', 'darkgreen');
            container.style.setProperty('--demo-text', 'white');
            break;
        case 'purple':
            container.style.setProperty('--demo-bg', 'rebeccapurple');
            container.style.setProperty('--demo-text', 'white');
            break;
    }
}
