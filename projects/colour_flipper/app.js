

const btn = document.querySelector("#new-colour");
const currentColour = document.querySelector("#current-colour");


const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]


function getRandomHexValue() {
   const randomHexValue = hexValues[Math.floor(Math.random() * hexValues.length)] // get an hexvalue at a random index between 0 and 16;
   
   return randomHexValue;
};


function getRandomHexString(stringLength) {
    let randomHexString = "";

    for (let i = 0; i < stringLength; i++) {
        randomHexString += getRandomHexValue();
    };
    return randomHexString;
};

btn.addEventListener("click", () => {
    const randomColour = `#${getRandomHexString(6)}`;

    document.body.style.background = randomColour;

    currentColour.textContent = randomColour;
});





