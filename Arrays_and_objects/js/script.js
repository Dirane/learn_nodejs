// let carMakes = ['Nissan', 'Ford', 'Tata'];

// let carMakes = new Array("Nissan", "Ford", "Tata");

// carMakes.push("BMW")

// carMakes.unshift("Audi")

// console.log(carMakes)

// console.log("Removing elements");

// carMakes.pop();

// carMakes.shift();

// let cars = [];

// let make = 'agle';
// let model = 'Talon TSI';
// let color = 'Blue';

// let car = [];
// car.push(make);
// car.push(model);
// car.push(color);

// cars.push(car);

// console.log(cars)

const products = [
    ['Gucci Round Bucklet Belt', 300],
    ['Gucci Round Bucklet Belt', 300],
    ['Smiley T-shirt', 50],
    ['Smiley T-shirt', 50],
    ['Shinie Nail paint', 10]
];

// const calculateDiscountedPrice = discount => {
//     for(let i = 0; i < products.length; i++){
//         products[i][1] = products[i][1] - products[i][1]*discount/100
//     }
// }

const calculateDiscountedPrice = discount => products.map(
    product => [product[0], product[1]-product[1]*discount/100]
)

let discountedPrices = calculateDiscountedPrice(10);

console.log(products)
console.log(discountedPrices)