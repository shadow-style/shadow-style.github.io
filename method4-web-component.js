
// -------------------------------------------------- Define the stylesheet string function
const stylesheetString = (colorScheme_start, colorScheme_end) =>
    `adopted-card {
        display: block;
        background: linear-gradient(45deg, ${colorScheme_start}, ${colorScheme_end});
        color: white;
        padding: 5px 20px;
        border-radius: 8px;
        margin: 10px 0;
        box-shadow: 0 4px 6px grey;
    }`;
// -------------------------------------------------- Create the initial adopted stylesheet
const adoptedSheet = new CSSStyleSheet();
adoptedSheet.replaceSync(stylesheetString('teal', 'blue')); // default colorscheme
// -------------------------------------------------- Define the custom element
customElements.define('demo-adopted', class extends HTMLElement {
    constructor() {
        super()
            .attachShadow({ mode: 'open' })
            .adoptedStyleSheets = [adoptedSheet];
        this.shadowRoot.innerHTML = `
            <adopted-card>
                <h4>📄 Adopted Stylesheet in &lt;adopted-card> shadowDOM</h4>
                <p>This component uses a <b>shared constructable stylesheet</b>.
                   All instances share the same stylesheet object!</p>
            </adopted-card>`;
    }
});
// ================================================== Demo #4 adopted stylesheet update function
function updateAdoptedStyles(scheme) {
    const colors = {
        'red': ['firebrick', 'lightcoral'],
        'green': ['green', 'olive'],
        'orange': ['orangered', 'orange']
    };
    adoptedSheet.replaceSync(
        stylesheetString(...colors[scheme] || colors['red']) // create new stylesheet content
    );
}
