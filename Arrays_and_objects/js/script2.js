function Engine(cylinder, size){
    this.cylinder = cylinder;
    this.size = size;
}

function Car(make, model, color, cylinder, size){
    this.make = make;
    this.model = model;
    this.color = color

    this.engine = new Engine(cylinder, size);
}

let jackCar = new Car('Eagle', 'Talon Tsi', 'silver', 4, 2.2);

let jillCar = new Car('Nissan', '300ZX', 'Black', 4, 2.2);

console.log(jackCar);
console.log(jillCar)

jackCar.year = 2015

console.log(jackCar)

let myCar = {
    make: 'Honda',
    model: 'Zxl',
    color: 'red',
    engine: {cylinder: 4, size:2.5}
}

console.log(myCar.make);
console.log(myCar['make'])