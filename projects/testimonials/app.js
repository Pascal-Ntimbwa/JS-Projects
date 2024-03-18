const testimonails = [
  {
    author: {
      name: "Peter Griffin",
      image: "peter.jpg",
    },
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis temporibus sint corrupti praesentium, expedita molestiae. Dolorem blanditiis, aut veritatis officiis ea sed ut perferendis cum nulla magni consectetur cumque ad!",
    date: "27 May",
  },
  {
    author: {
      name: "Gentle Boy",
      image: "boy.jpg",
    },
    comment:
      "Amet consectetur adipisicing elit. Perferendis temporibus sint corrupti praesentium, expedita molestiae. Dolorem blanditiis, aut veritatis officiis ea sed ut perferendis cum nulla magni consectetur cumque ad!",
    date: "08 July",
  },
  {
    author: {
      name: "Naruto Uzumaki",
      image: "naruto.jpg",
    },
    comment:
      "Consectetur adipisicing elit. Perferendis temporibus sint corrupti praesentium, expedita molestiae. Dolorem blanditiis, aut veritatis officiis ea sed ut perferendis cum nulla magni consectetur cumque ad!",
    date: "17 March",
  },
  {
    author: {
      name: "Mr P. Buddy",
      image: "dog.jpg",
    },
    comment:
      "Dolorem blanditiis, aut veritatis officiis ea sed ut perferendis cum nulla magni consectetur cumque ad!",
    date: "31 October",
  },
  {
    author: {
      name: "Pretty Girl",
      image: "girl.jpg",
    },
    comment:
      "Perferendis temporibus sint corrupti praesentium, expedita molestiae. Dolorem blanditiis, aut veritatis officiis ea sed ut perferendis cum nulla magni consectetur cumque ad!",
    date: "11 February",
  },
];

const containerElement = document.getElementById("testimonails-container");

const makeTestimonailCard = (testimonail) => {
  return `
    <div class="testimonail-card">
        <img src="${testimonail.author.image}">
        <h2>${testimonail.author.name}</h2>
        <p>${testimonail.comment}</p>
        <date>Written on ${testimonail.date}</date>
    </div>`;
};

let currentTestimonail = 3;

const nextTestimonail = () => {
  if (currentTestimonail < testimonails.length - 1) {
    currentTestimonail += 1;
    updatePage();
  }
};


const prevTestimonail = () => {
  if (currentTestimonail > 0) {
    currentTestimonail -= 1;
    updatePage();
  }
};


const updatePage = () => {
  let markup = makeTestimonailCard(testimonails[currentTestimonail]);

    if (testimonails.length > 1) {
        markup += `
            <nav>
                <button onClick="prevTestimonail()">Previous</button>
                <button onClick="nextTestimonail()">Next</button>
            </na>`
    }

  containerElement.innerHTML = markup;
};

updatePage();
