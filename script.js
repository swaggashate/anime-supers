const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const logo = document.getElementById('logo');

// Logo blinking animation
const logoNormal = './weblogo.png';
const logoBlinking = './weblogoblink.png';
let isNormalLogo = true;

function swapLogo() {
    isNormalLogo = !isNormalLogo;
    logo.src = isNormalLogo ? logoNormal : logoBlinking;
    
    // Schedule next swap with different timing
    const delay = isNormalLogo ? 4000 : 200; // 4s for normal, 200ms for blink
    setTimeout(swapLogo, delay);
}

// Start the animation
setTimeout(swapLogo, 4000); // First swap after 4 seconds

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navMenu.classList.remove('active');

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});
