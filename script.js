let btnMenu = document.getElementById("btn-menu-lateral-mobile");
let menuMobile = document.getElementById("menu-mobile");
let overlay = document.getElementById("desfoque");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("openMenu");
});

menuMobile.addEventListener("click", () => {
  menuMobile.classList.remove("openMenu");
});

overlay.addEventListener("click", () => {
  menuMobile.classList.remove("openMenu");
});
