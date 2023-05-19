const loginFormEl = document.querySelector(".login-form");
loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    loginFormEl.elements.email.value === "" ||
    loginFormEl.elements.password.value === ""
  ) {
    alert("Пожалуйста, заполните все поля");
  } else {
    const formData = {
      email: loginFormEl.elements.email.value,
      password: loginFormEl.elements.password.value,
    };
    console.log(formData);
    loginFormEl.reset();
  }
});
