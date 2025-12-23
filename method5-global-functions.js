// Button onclick action
function injectStyle(elementId, color) {
    const style = document.createElement('style');
    style.textContent =
       `inject-card {
            background: ${color} !important;
            transform: scale(1.05);
            transition: all 0.3s ease;
        }`;
    document.getElementById(elementId)?.shadowRoot.append(style);
}

function injectStyleToAll(color) {
    removeInjectedStyles(); // Clean up before injecting new styles
    document.querySelectorAll('demo-inject').forEach(el => {
        injectStyle(el.id, color);
    });
}

function removeInjectedStyles() {
    document.querySelectorAll('demo-inject').forEach(el => {
        el.shadowRoot // Remove any previously injected styles in shadowDOM
            .querySelectorAll('style:not(#main-style)')
            .forEach(style => style.remove())
    });
 }