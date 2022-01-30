let arr = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
  if (arr === true) {
    let arrMin = [Math.min(...arr)];
    let arrWithoutMin = arr.slice(arrMin);
    let minOfarrWithoutMin = [Math.min(...arrWithoutMin)];
    let arrSecondbestMin = arrMin.concat(minOfarrWithoutMin);
    console.log(arrSecondbestMin);
  }
}

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

// the next one works perfectly
/*let arr = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
  let arrMin = arr.sort((a, b) => a - b);
  console.log(`${arrMin[0]} ${arrMin[1]}`);
}*/
