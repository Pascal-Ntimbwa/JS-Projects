const initialQuestions = [
  {
    label: "Friendliness",
    rating: 0,
  },
  {
    label: "Cleanliness",
    rating: 0,
  },
  {
    label: "Food",
    rating: 0,
  },
  {
    label: "Service",
    rating: 0,
  },
  {
    label: "Vibe",
    rating: 0,
  },
];

const storedQuestions = JSON.parse(localStorage.getItem("storedQuestions")); // local storage only stores string, so we need to parse the string to return the object.

const questions = storedQuestions || initialQuestions;

const makeStarRating = (question) => {
  const container = document.createElement("div");
  const label = document.createElement("label");

  label.textContent = question.label;

  container.appendChild(label);
  container.appendChild(makeStars(5, question));

  return container;
};

const makeStars = (maxValue, question) => {
  const starContainer = document.createElement("div");

  for (let starPosition = 1; starPosition <= maxValue; starPosition++) {
    const starElement = document.createElement("span");

    starContainer.appendChild(starElement);

    if (starPosition <= question.rating) {
      starElement.classList.add("filled");
    } else {
      starElement.classList.add("empty");
    }

    starElement.onclick = () => {
        for (let i = 0; i < maxValue; i++) {
            if (i < starPosition) {
                starContainer.children[i].classList.add("filled");
            } else {
                starContainer.children[i].classList.remove("filled");
                starContainer.children[i].classList.add("empty");
            }
        }

        question.rating = starPosition  // set the value of the rating to be equal to the star position where the user clicks.

        localStorage.setItem("storedQuestions", JSON.stringify(questions))  // store the new values in the local storage, but we need to convert the object to string bcz we only store strings in LocalStorage
    }
  }

  return starContainer;
};

const ratingElement = document.getElementById("ratings");

questions.forEach((question) => {
  ratingElement.appendChild(makeStarRating(question));
});
