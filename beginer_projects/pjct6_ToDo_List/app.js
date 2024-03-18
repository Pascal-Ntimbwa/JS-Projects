// get element from the DOM

let form = document.querySelector("form");
let npt = document.querySelector("input");
let tasks = document.querySelector(".tasks");


function capitalizeFirstLetter(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}


function getTodo(value) {
  //creating new Elements
  let task = document.createElement("div");
  let textEl = document.createElement("span");

  //setting values & styles

  let capitalizedValue = capitalizeFirstLetter(value);

  textEl.innerHTML = capitalizedValue;


  //append elements to the DOM
  task.appendChild(textEl);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  //attach events

  closeEl.addEventListener("click", (e) => {
    tasks.removeChild(task);
  });

  task.appendChild(closeEl);
  task.classList.add("task");
  return task;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = npt.value;
  if (!value.trim()) return;
  tasks.appendChild(getTodo(value));
  npt.value = "";
});
