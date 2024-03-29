const bodyEl = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
changeColorButton.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomHexColor;
  colorSpan.textContent = randomHexColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
