let sum = 0;

for (let num = 0; num < 21; num++) {
  let num = prompt("Enter Number", "Here you can enter 20 numbers");
  if (num % 2 === 0) {
    sum = sum + 1;
  }
}
console.log(sum);
