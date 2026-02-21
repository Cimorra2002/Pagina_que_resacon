function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");
    toggle.classList.toggle("active");

    // Si el menú está abierto, bloqueamos el scroll del cuerpo de la web
    if (menu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

/* Cerrar menú al tocar opción */
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
    });
});