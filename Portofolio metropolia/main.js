const buttonTop = document.querySelector("#returnToTop");

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

buttonTop.addEventListener("click", getToTop);
