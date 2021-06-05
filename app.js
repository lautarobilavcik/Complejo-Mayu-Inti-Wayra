// menu hamburguesa
const hamburguer_menu = document.querySelector(".hamburguer-menu");
const container = document. querySelector(".container");

hamburguer_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

//boton
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    modal_container.classList.add("show");
   
});

close.addEventListener("click", () => {
    modal_container.classList.remove("show");

});