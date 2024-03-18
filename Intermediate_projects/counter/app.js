
const btnAdd = document.querySelector("#counterAdd")
const btnSub = document.querySelector("#counterSub")
const btnDisplay = document.querySelector("#counterDisplay")

let counter = 0

const limit = 25;

function upUpdateDisplay() {

    if (counter > 25) {
        counter = 25;
    } else if (counter < 0) {
        counter = 0;
    }

    btnDisplay.textContent = counter;

    document.body.style.backgroundColor = `rgb(100, ${(counter/limit) * 128} , 10)`;
}


btnAdd.addEventListener("click", () => {
    counter += 1
    upUpdateDisplay()
});


btnSub.addEventListener("click", () => {
    counter -= 1
    upUpdateDisplay()
})


upUpdateDisplay()
