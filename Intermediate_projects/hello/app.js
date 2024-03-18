

const btn = document.querySelector("button");

const spn = document.querySelector("span");


btn.addEventListener("click", () => {
    const userName = prompt("Please Enter your name: ");
    capUserName = userName.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    spn.textContent = userName ? `${capUserName} !` : `World !`
});

