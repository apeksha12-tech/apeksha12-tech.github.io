// =========================================================
// APEKSHA K Marigoudar — PORTFOLIO JAVASCRIPT
// =========================================================


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    menuBtn.textContent = navMenu.classList.contains("show")
        ? "✕"
        : "☰";
});


// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// COPYRIGHT YEAR
// =========================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =========================
// TYPING ANIMATION
// =========================

const heroTitle = document.querySelector(".hero-content h2");

if (heroTitle) {

    const roles = [
        "B.E. Student",
        "Aspiring Developer",
        "Java Learner",
        "Python Learner",
        "Web Development Enthusiast"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            heroTitle.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            heroTitle.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {
                    roleIndex = 0;
                }

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 45 : 90
        );
    }

    typeEffect();
}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput =
            contactForm.querySelector('input[type="text"]');

        const name = nameInput.value.trim();

        if (name) {

            alert(
                `Thank you, ${name}! Your message has been received.`
            );

            contactForm.reset();

        }

    });

}


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .timeline-item, .contact-info, .contact-form"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


// =========================
// BUTTON EFFECT
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";

    });

});


// =========================
// PAGE LOADED
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});