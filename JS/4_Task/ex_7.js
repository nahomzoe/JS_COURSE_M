let arr = [];

for (let i = 0; i < Infinity; i++) {
  let num = Number(prompt("Enter Number"));
  let con = confirm("Do you want to continue entering number");
  arr.push(num);

  if (con === true) {
    num;
  } else {
    let sumOfarr = arr.reduce((preEle, curEle) => preEle + curEle);
    console.log(arr);
    console.log(sumOfarr / arr.length);

    break;
  }
}
