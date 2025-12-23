// -------------------------------------------------------------------- Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
// ==================================================================== #1 Inheritable Global Functions
// ==================================================================== #2 Change theme function for CSS Variables demo
function changeTheme(theme) {
    const container = document.querySelector('.vars-demo');
    switch (theme) {
        case 'blue':
            container.style.setProperty('--demo-bg', '#3498db');
            container.style.setProperty('--demo-text', 'white');
            break;
        case 'green':
            container.style.setProperty('--demo-bg', '#2ecc71');
            container.style.setProperty('--demo-text', 'white');
            break;
        case 'purple':
            container.style.setProperty('--demo-bg', '#9b59b6');
            container.style.setProperty('--demo-text', 'white');
            break;
    }
}
