const counterDivEl = document.querySelector("#counter"); //Ну а вдруг у нас документ огромный, не зря же счетчик в диве
const incrementButtonEl = counterDivEl.querySelector(
  '[data-action="increment"]'
);
const decrementButtonEl = counterDivEl.querySelector(
  '[data-action="decrement"]'
);
const valueEl = counterDivEl.querySelector("#value");
let value = parseInt(valueEl.textContent);

incrementButtonEl.addEventListener("click", () => {
  value += 1;
  valueEl.textContent = value;
});

decrementButtonEl.addEventListener("click", () => {
  value -= 1;
  valueEl.textContent = value;
});
