let arr = [];
let num = Number(prompt("How many number you want to enter?"));
for (let i = 0; i < num; i++) {
  let askUser = Number(prompt(`Enter number ${num} times`));
  arr.push(askUser);
  console.log(arr);
  let arrMin = Math.min(...arr);
  console.log(arrMin);
}
