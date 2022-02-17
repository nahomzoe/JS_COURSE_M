let header = document.querySelector("header");
let button = document.querySelector("#backToTop");
let mobButton = document.querySelector("#mobileButton");
let nav = document.querySelector("nav");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add("bg");
    button.style.display = "block";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

button.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
