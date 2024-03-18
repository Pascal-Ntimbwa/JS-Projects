const bdy = document.body;
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    color = btn.value;
    changeBackground(color);
  });
});

function changeBackground(color) {
  bdy.className = "";
  switch (color) {
    case "purple":
      bdy.classList.add("purple");
      break;
    case "blue":
      bdy.classList.add("blue");
      break;
    case "red":
      bdy.classList.add("red");
      break;
    case "green":
      bdy.classList.add("green");
      break;
    case "yellow":
      bdy.classList.add("yellow");
      break;
    case "teal":
      bdy.classList.add("teal");
      break;
    default:
      break;
  }
}
