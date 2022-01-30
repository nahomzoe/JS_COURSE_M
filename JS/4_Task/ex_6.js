let arr = [];
for (let i = 0; i < 25; i++) {
  let num = prompt("Enter numbers");
  arr.push(Number(num));
}
let sumOfarr = arr.reduce((pv, cv) => pv + cv);

console.log(sumOfarr / 25);
