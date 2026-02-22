// ========================
// Scroll Fade-In Animation
// ========================
const fadeEls = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

fadeEls.forEach((el, i) => {
    // Stagger delay for grouped elements
    el.style.transitionDelay = `${(i % 5) * 60}ms`;
    observer.observe(el);
});

// ========================
// Active Nav Link on Scroll
// ========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${id}`
                    );
                });
            }
        });
    },
    { threshold: 0.45 }
);

sections.forEach((section) => sectionObserver.observe(section));
