function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");
    toggle.classList.toggle("active");
}

/* Cerrar menú al tocar opción */
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
    });
});