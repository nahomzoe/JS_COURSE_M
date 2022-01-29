const calculator = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.querySelector("#money").value);

  let amount = Math.floor(money / price);
  let answer = document.querySelector("#answer");

  let text;
  amount >= 10
    ? (text = `You could get ${amount}`)
    : (text = `You could get ${amount}, but Sorry you have to stay`);

  answer.textContent = text;
};
