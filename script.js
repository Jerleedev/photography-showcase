// Debounce function to optimize event firing

const backToTop = document.getElementById('backToTop');
const reveals = document.querySelectorAll('.reveal');
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this,
            args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function handleScroll() {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Easing function for smooth animation
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}


// Update scroll progress bar
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollProgress = (scrollPosition / scrollHeight) * 100;
    document.body.style.setProperty('--scroll-progress', `${scrollProgress}%`);
});

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".reveal-right");

    const handleScroll = () => {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll("#fadeOut");

    const handleScroll = () => {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});

