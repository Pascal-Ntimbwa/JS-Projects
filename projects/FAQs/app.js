const dataArray = [
  {
    question: "Why do you want to learn JavaScript?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores itaque quia nihil ab, provident quibusdam. Eos, dolorem repudiandae perspiciatis sequi dolores, dolor provident quasi, alias optio sapiente hic dolorum!",
  },
  {
    question: "What is JavaScript?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores itaque quia nihil ab, provident quibusdam. Eos, dolorem repudiandae perspiciatis sequi dolores, dolor provident quasi, alias optio sapiente hic dolorum!",
  },
  {
    question: "Where is JavaScript used?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores itaque quia nihil ab, provident quibusdam. Eos, dolorem repudiandae perspiciatis sequi dolores, dolor provident quasi, alias optio sapiente hic dolorum!",
  },
  {
    question: "How can I learn JavaScript?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores itaque quia nihil ab, provident quibusdam. Eos, dolorem repudiandae perspiciatis sequi dolores, dolor provident quasi, alias optio sapiente hic dolorum!",
  },
  {
    question: "Do you offer certifications?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores itaque quia nihil ab, provident quibusdam. Eos, dolorem repudiandae perspiciatis sequi dolores, dolor provident quasi, alias optio sapiente hic dolorum!",
  },
];

const faqContainer = document.getElementById("faq-container");

const makeHTML = (data) => {
  return `<details>
                <summary>${data.question}</summary>
                <p>${data.answer}</p>
            </details>`;
};

faqContainer.innerHTML = dataArray.map((data) => makeHTML(data)).join("");
