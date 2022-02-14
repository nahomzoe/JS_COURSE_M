const carArray = [];
class Car {
  constructor(licenceNumber) {
    this.licenceNumber = licenceNumber;
  }
}
const addCar = (event) => {
  event.preventDefault();

  const licenceNumber = document.querySelector("#licence-number").value;
  const maker = document.querySelector("#car-maker").value;
  const model = document.querySelector("#car-model").value;
  const owner = document.querySelector("#car-owner").value;
  const price = document.querySelector("#car-price").value;
  const color = document.querySelector("#car-color").value;

  console.log({
    licenceNumber,
    maker,
    model,
    owner,
    price,
    color,
  });
  const newCar = new Car(licenceNumber);
  carArray.push(newCar);
  console.table(carArray);
};

const carForm = document.querySelector("#form-car");
carForm.addEventListener("submit", addCar);

/*car.calcAge() = calcAge: function () {
    this.age = 2022 - this.year;
    return this.age;
}*/
//delete car.city;
//car.calcAge();

//console.log(car);
//console.log(car.mark);
