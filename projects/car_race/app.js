const carStart = (carNumber, maxTime = 5) =>
  new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * maxTime) * 1000;
    console.log(randomTime);

    setTimeout(() => {
      resolve(carNumber);
    }, randomTime);
  });

const carsOrder = [];

const updateDisplay = () => {
  const raceElement = document.getElementById("race");
  raceElement.innerHTML = "";
  carsOrder.forEach((id, position) => {
    raceElement.innerHTML += `<div><img src="car${id}.jpg"></br><span>#${position + 1} Place</div>`
  });
};


carStart(1).then((result) => {
  console.log(result);
  carsOrder.push(result);
})
.then(updateDisplay)
carStart(2).then((result) => {
  console.log(result);
  carsOrder.push(result);
})
.then(updateDisplay)


carStart(4).then((result) => {
  console.log(result);
  carsOrder.push(result);
})
.then(updateDisplay)


carStart(5).then((result) => {
  console.log(result);
  carsOrder.push(result);
})
.then(updateDisplay)

carStart(6).then((result) => {
    console.log(result);
    carsOrder.push(result);
  })
  .then(updateDisplay)

carStart(7).then((result) => {
    console.log(result);
    carsOrder.push(result);
  })
  .then(updateDisplay)
carStart(8).then((result) => {
    console.log(result);
    carsOrder.push(result);
  })
  .then(updateDisplay)

carStart(9).then((result) => {
    console.log(result);
    carsOrder.push(result);
  })
  .then(updateDisplay)
carStart(10).then((result) => {
    console.log(result);
    carsOrder.push(result);
  })
  .then(updateDisplay)