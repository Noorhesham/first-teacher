document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
const inputFields = document.querySelectorAll(".input-field");

inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.firstElementChild.classList.add("focused");
  });

  input.addEventListener("blur", () => {
    input.parentElement.firstElementChild.classList.remove("focused");
  });

  input.addEventListener("input", () => {
    if (input.value) {
      input.parentElement.classList.add("has-content");
    } else {
      input.parentElement.classList.remove("has-content");
    }
  });
});
