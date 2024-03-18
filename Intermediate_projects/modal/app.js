

const openModal = document.querySelector("#openModal");
const myModal = document.querySelector(".myModal");
const modalContent = document.querySelector(".modal_content");
const closeModal = document.querySelector(".close");
const userInput = document.querySelector(".user")


openModal.addEventListener("click", () => {
    myModal.classList.add("open");
    openModal.classList.add("hide");

})


closeModal.addEventListener("click", () => {
    myModal.classList.remove("open");
    openModal.classList.remove("hide")
})