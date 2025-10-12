const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.add("hide");
}
menuButton.addEventListener("click", toggleMenu);