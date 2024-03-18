const getLoremIpsum = (numberOfParagraphs) => {
  fetch(
    `https://baconipsum.com/api/?type=all-meat&paras=${numberOfParagraphs}`
  )
    .then((response) => response.json())
    .then((loremIpsumTextArray) => {
      updateResult(loremIpsumTextArray);
    });
};


const updateResult = textArray => {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    resultElement.innerHTML = textArray
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
    

    addCopyButton(textArray.join(""));
    resultElement.classList.add("show");
};


const addCopyButton = (text) => {
    const resultElement = document.getElementById("result");
    const copyBtn = document.createElement("button");

    copyBtn.textContent = "Copy";
    copyBtn.classList.add("copy");

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 2000)
    };

    resultElement.appendChild(copyBtn);
}


const getLoremIpsumBtn = document.getElementById("getLoremIpsum");

const paragraphsCount = document.getElementById("paragraphsCount");


getLoremIpsumBtn.addEventListener("click", () => {
    getLoremIpsum(parseInt(paragraphsCount.value));

    paragraphsCount.value = "";
})