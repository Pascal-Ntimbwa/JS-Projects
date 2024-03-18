
const emj = document.querySelector("#emoji");

const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😍",
    "😎",
    "😚",
    "☺",
    "🤗",
    "🤩",
    "🤔",
    "🙄",
    "🥱",
    "😛",
    "👲"
];

emj.addEventListener("mouseover", (e) => {
    emj.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
})