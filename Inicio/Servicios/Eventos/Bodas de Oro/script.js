document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const nav = document.getElementById("nav");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
