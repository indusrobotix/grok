// script.js (Shared JavaScript)

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000); // Simulate loading time; adjust as needed
});

// Contact Form Validation
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        // Simulate form submission (replace with actual backend integration)
        alert('Message sent successfully!');
        form.reset();
    });
}

// Additional JS for animations or interactions can be added here
