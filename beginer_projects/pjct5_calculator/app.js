document.getElementById("btn").addEventListener("click", (e) => {
  //get the values of the operands

  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");
  let sign = document.querySelector("#selectOp").value;

  switch (sign) {
    case "plus":
      result.innerHTML = +num1 + +num2;
      break;
    case "minus":
      result.innerHTML = +num1 - +num2;
      break;
    case "div":
      result.innerHTML = +num1 / +num2;
      break;
    case "mult":
      result.innerHTML = +num1 * +num2;
      break;
    default:
      break;
  }
});
