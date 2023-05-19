const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", () => {
  const inputValue = nameInputEl.value.trim();

  if (inputValue !== "") {
    nameOutputEl.textContent = inputValue;
  } else {
    nameOutputEl.textContent = "Anonymous";
  }
});
