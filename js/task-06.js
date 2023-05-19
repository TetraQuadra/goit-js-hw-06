const inputFieldEl = document.querySelector("#validation-input");

inputFieldEl.addEventListener("blur", () => {
  const enteredValue = inputFieldEl.value;
  const requiredLength = parseInt(inputFieldEl.dataset.length);
  console.log(inputFieldEl);
  if (enteredValue.length === requiredLength) {
    inputFieldEl.classList.remove("invalid");
    inputFieldEl.classList.add("valid");
  } else {
    inputFieldEl.classList.remove("valid");
    inputFieldEl.classList.add("invalid");
  }
});
