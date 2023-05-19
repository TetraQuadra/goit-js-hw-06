const boxCreatorEl = document.querySelector("#controls");
const inputNumberOfBoxesEl = boxCreatorEl.querySelector("input");
const createButtonEl = boxCreatorEl.querySelector("button[data-create]");
const destroyButtonEl = boxCreatorEl.querySelector("button[data-destroy]");
const boxesCollection = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  let tempBoxHolder = "";
  for (let i = 0; i < amount; i++) {
    const bckgColor = getRandomHexColor();
    tempBoxHolder += `<div style="width:${size}px; height:${size}px; background-color: ${bckgColor};"></div>\n`;
    size += 10;
  }
  return tempBoxHolder;
}

function destroyBoxes(amount) {}

createButtonEl.addEventListener("click", () => {
  const amount = inputNumberOfBoxesEl.value;
  boxesCollection.innerHTML = createBoxes(amount);
});

destroyButtonEl.addEventListener("click", () => {
  boxesCollection.innerHTML = "";
});
