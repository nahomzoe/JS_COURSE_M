let arr = [];

for (let i = 0; i < 10; i++) {
  let num = Number(prompt("Enter 10 numbers"));
  arr.push(num);
  let arrMin = [Math.min(...arr)];
  let arrWithoutMin = arr.slice(arrMin);
  let minOfarrWithoutMin = [Math.min(...arrWithoutMin)];
  let arrSecondbestMin = arrMin.concat(minOfarrWithoutMin);
  console.log(arrSecondbestMin);
}
