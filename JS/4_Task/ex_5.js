let sum = 0;
for (let i = 0; ; i++) {
  let num = prompt("Enter number");

  if (num > 0 == true) {
    sum += parseInt(num, 10);
  } else {
    console.log("No zero");
    break;
  }
}
console.log(sum / 2);
