// Detectar scroll para cambiar color de navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Animar elementos con clase 'fade-in' cuando aparecen en pantalla
document.addEventListener("DOMContentLoaded", function () {
    let fadeInElements = document.querySelectorAll(".fade-in");
    let fadeUpElements = document.querySelectorAll(".fade-up");

    function checkVisibility() {
        fadeInElements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });

        fadeUpElements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
