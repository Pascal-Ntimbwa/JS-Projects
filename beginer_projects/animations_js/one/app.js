

const sidebar = document.querySelector(".sidebar");
const btn = document.querySelector("button");


btn.addEventListener("click", (e) => {
    sidebar.classList.toggle("hide");
})