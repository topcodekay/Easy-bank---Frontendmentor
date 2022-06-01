"use strict";

const [toggleButton] = document.getElementsByClassName("toggler-btn");
const [navbarlinks] = document.getElementsByClassName("nav-list");

toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active");
});
