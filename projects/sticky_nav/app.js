

const navElement = document.querySelector("nav");
const navbarLinks = navElement.querySelectorAll("a");

const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener("scroll", () => {
    const scrollPosition = scrollY;

    navElement.style.top = scrollPosition + "px";

    navbarLinks.forEach(link => {
        const selectedLink = document.querySelector(link.hash);

        const offset = 40;

        if (scrollPosition + offset> selectedLink.offsetTop && scrollPosition + offset < selectedLink.offsetTop + selectedLink.offsetHeight) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    })
})