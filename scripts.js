document.addEventListener('DOMContentLoaded', () => {
    // This fulfills requirement 5.1 (g)
    const lastUpdated = document.getElementById('last-updated');
    const date = new Date();
    lastUpdated.textContent = `Last updated: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    // Initialize carousel functionality
    const track = document.querySelector('.carousel-track');
    let index = 0;

    // Set interval for automatic carousel movement
    setInterval(() => {
        index++;
        if (index >= track.children.length) {
            index = 0;
        }
        const translateX = index * -300;
        track.style.transform = `translateX(${translateX}px)`;
    }, 3000);

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thanks for your query, I will get back to you soon!');
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

/**
 * Animates the appearance of text on page load.
 */
function animateText() {
    const text = document.querySelector('.animated-text');
    text.style.animation = 'slideInRight 1.5s ease-out';
}

/**
 * Animates the appearance of the button group on page load.
 */
function animateButtonGroup() {
    const buttonGroup = document.querySelector('.button-group');
    buttonGroup.style.animation = 'pulse 1.5s infinite';
}

// Execute animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    animateText();
    animateButtonGroup();
});
