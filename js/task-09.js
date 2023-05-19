const bodyEl = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
changeColorButton.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
