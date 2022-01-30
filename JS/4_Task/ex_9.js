/*let arr = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
}
for (let i = 0; i < 10; i++) {
  if (arr[i] < arrMin) {
    let arrMin = arr[0];
    arrMin = arr[i];
    console.log(arrMin);
  }
  console.log(arrMin);
}*/
/*let max = 0;
for (let i = 0; i < 4; i++) {
  let num = Number(prompt("Enter 10 numbers"));

  if (num > max) {
    max = num;
  } else {
    console.log(max);
  }
}*/
// works for 2 max numbers
/*let max = 0;
let maxMax = 0;
for (let i = 0; i < 4; i++) {
  let num = Number(prompt("Enter 10 numbers"));

  if (num > max) {
    maxMax = max;
    max = num;
  }
  if (num > maxMax && num < max) {
    max = num;
  }
}
console.log(`${max} ${maxMax}`);*/
/*let max = 0;
let secondMax = 0;
for (let i = 0; i < 4; i++) {
  let num = Number(prompt("Enter 10 numbers"));

  if (num > max) {
    secondMax = max;
    max = num;
  }
  if (num > secondMax && num < max) {
    max = num;
  }
}
console.log(`${max} ${secondMax}`);*/

// the next one works perfectly
/*let arr = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
  let arrMin = arr.sort((a, b) => a - b);
  console.log(`${arrMin[0]} ${arrMin[1]}`);
}*/
let max = 0;
let secondMax = 0;
for (let i = 0; i < 4; i++) {
  let num = Number(prompt("Enter 10 numbers"));

  if (num > max) {
    secondMax = max;
    max = num;
  }
  if (num > secondMax && num < max) {
    secondMax = num;
  }
}
console.log(`${max} ${secondMax}`);
