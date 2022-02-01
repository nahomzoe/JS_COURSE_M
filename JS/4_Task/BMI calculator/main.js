const calculatBMI = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value) / 100;
  let result = document.querySelector("#result");

  let BMI = (weight / (height * height)).toFixed(1);

  let text;
  let color;

  if (BMI < 18.5) {
    text = `${BMI} You are under weight`;
    color = `warning`;
  } else if (18.5 > BMI && BMI < 24.9) {
    text = `${BMI} You are Healthy`;

    color = `normal`;
  } else if (25.0 > BMI && BMI < 29.9) {
    text = `${BMI} Pre-obesity`;
    color = `warning`;
  } else {
    text = `${BMI} Over obesity`;
    color = `danger`;
  }

  result.textContent = text;
  result.classList.add(color);
};
