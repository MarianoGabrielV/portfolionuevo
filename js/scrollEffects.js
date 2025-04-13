// Detectar scroll para cambiar color de navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Detectar elementos con clase 'fade-in' y animarlos cuando aparecen en pantalla
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach((element) => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
