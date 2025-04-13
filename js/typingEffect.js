document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("typing-text");
    let texts = ["Programador", "Analista de Datos"];
    let textIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let erasingSpeed = 100;
    let delayBetweenTexts = 2000;

    function type() {
        if (charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
