// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentTestimonial = index;
}

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showTestimonial(idx));
});

// Auto-slide testimonials every 6 seconds
setInterval(() => {
    let nextIndex = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(nextIndex);
}, 6000);

// Contact Form (demo only)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

// Initialize first testimonial
showTestimonial(0);