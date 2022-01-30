let arr = [];
for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
}
let arrSorted = arr.sort((a, b) => a - b);
let arrSum = arr.reduce((a, b) => a + b);
console.log(arrSorted[0]);
console.log(arrSorted[arr.length - 1]);
console.log(arrSum / arr.length);
console.log(arrSum);
