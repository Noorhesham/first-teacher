document.addEventListener("DOMContentLoaded", function () {
  // Parallax effect
  const parallaxContainers = document.querySelectorAll(".parallax-container");
  const parallaxImage = document.getElementById("parallaxImage");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    parallaxContainers.forEach((container) => {
      container.style.transform = `translateY(-${scrollY * 0.8}px)`;
    });
    if (parallaxImage) parallaxImage.style.top = `-${scrollY}px`;
  });

  // Avatar menu
  const avatar = document.querySelector(".avatar");
  const menu = document.getElementById("menu");

  avatar.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (event.target !== avatar && event.target !== menu && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  });

  // Accordion
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function () {
      const accordionContent = this.nextElementSibling;
      const accordion = this.parentElement;

      if (accordion.classList.contains("open")) {
        accordion.classList.remove("open");
        accordion.classList.add("close");
        setTimeout(() => {
          accordionContent.style.display = "none";
          accordion.classList.remove("close");
        }, 300); // Wait for the animation to complete
      } else {
        accordion.classList.add("open");
        accordionContent.style.display = "block";
      }
    });
  });

  // Navbar scroll behavior
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
    menu.style.display = "none";
  });

  // Input field animations
  const inputFields = document.querySelectorAll(".input-field");

  inputFields.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.firstElementChild.classList.add("focused");
    });

    input.addEventListener("blur", () => {
      input.parentElement.firstElementChild.classList.remove("focused");
    });

    input.addEventListener("input", () => {
      input.parentElement.classList.toggle("has-content", input.value);
    });
  });
});
