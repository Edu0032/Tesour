document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show", "active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, { threshold: 0.4 });

    cards.forEach(card => observer.observe(card));

    // Menu mobile
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    menuToggle.addEventListener("click", () => nav.classList.toggle("active"));
});