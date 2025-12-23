customElements.define('demo-part', class DemoPart extends HTMLElement {
    constructor() {
        super()
            .attachShadow({ mode: 'open' })
            .innerHTML = `
                    <style>
                        :host {
                            display: block;
                            border: 1px solid #ddd;
                            border-radius: 5px;
                            overflow: hidden;
                        }
                        [part] {
                            display: block;
                        }
                    </style>
                    <div part="header">🔖 Header Section (part="header")</div>
                    <div part="content">
                        📝 Content Section (part="content")
                        <p>These sections are styled from outside using the ::part() selector!</p>
                    </div>
                    <div part="footer">🔖 Footer Section (part="footer")</div>`;
    }
});
