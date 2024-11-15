const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//animation du curseur
const text = "Transformez votre entreprise avec l'IA";
const delay = 125; // Délai entre chaque lettre en ms
const welcome = document.getElementById('welcome');
let index = 0;

// Créer le curseur
const cursor = document.createElement('span');
cursor.className = 'cursor';
welcome.appendChild(cursor);

// Fonction pour animer le texte
function typeText() {
    if (index < text.length) {
        const char = document.createTextNode(text[index]);
        welcome.insertBefore(char, cursor);
        index++;
        setTimeout(typeText, delay);
    }else{
        setTimeout(() => {
            cursor.style.display = 'none';
        }, 1500);
    }
}

// Démarrer l'animation du texte
typeText();

// Animation on scroll
function reveal() {
    var reveals = document.querySelectorAll(".service-card, .team-member, .testimonial-card, .impact-card");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Initial check

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// Animation on scroll avec IntersectionObserver
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observer les éléments
document.querySelectorAll('.service-card, .team-member, .testimonial-card, .feedback-form, .impact-card').forEach((element) => {
    observer.observe(element);
});

// Animation séquentielle pour les cartes de service
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// Animation séquentielle pour les membres de l'équipe
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.transitionDelay = `${index * 0.15}s`;
});

// Animation au défilement pour le header
let lastScroll = 0;
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
        }
    });
});

