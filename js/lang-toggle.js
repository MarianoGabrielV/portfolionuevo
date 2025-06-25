document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("lang-toggle");
  langToggle.addEventListener("click", function () {
    const elements = document.querySelectorAll("[data-en][data-es]");
    const toSpanish = this.textContent === "Español";
    elements.forEach(el => {
      el.innerHTML = toSpanish ? el.dataset.es : el.dataset.en;
    });
    this.textContent = toSpanish ? "English" : "Español";
  });
});
