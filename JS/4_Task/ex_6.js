let arr = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
  let num = prompt("Enter 25 numbers");
  arr.push(Number(num));
}
let ave = arr.reduce((pv, cv) => pv + cv / 2);

console.log(ave);
