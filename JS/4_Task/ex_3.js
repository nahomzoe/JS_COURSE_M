for (let i = 0; i < Infinity; i++) {
  let average;
  let distance = prompt("Please enter distance", "Enter KM");
  let time = prompt("Please enter time", "Enter Hour");

  if (distance > 0) {
    average = distance / time;
    console.log(average);
  } else {
    console.log(`Distance can not be Zero`);
    break;
  }
}
