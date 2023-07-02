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

// const products = [
//     ['Gucci Round Bucklet Belt', 300],
//     ['Gucci Round Bucklet Belt', 300],
//     ['Smiley T-shirt', 50],
//     ['Smiley T-shirt', 50],
//     ['Shinie Nail paint', 10]
// ];

// // const calculateDiscountedPrice = discount => {
// //     for(let i = 0; i < products.length; i++){
// //         products[i][1] = products[i][1] - products[i][1]*discount/100
// //     }
// // }

// const calculateDiscountedPrice = discount => products.map(
//     product => [product[0], product[1]-product[1]*discount/100]
// )

// let discountedPrices = calculateDiscountedPrice(10);

// console.log(products)
// console.log(discountedPrices)

const products = [
    ['Gucci Round Bucklet Belt', 400],
    ['Gucci Round Bucklet Belt', 450],
    ['Esbeda Wallet', 250],
    ['Gucci Round Bucklet', 300],
    ['Smiley T-shirt', 500],
    ['Smiley T-shirt', 50],
    ['Smiley T-shirt', 250],
    ['Shinie Nail paint', 100]
];

// const premiumProducts = products.filter(product => product[1]>300);
// console.log(premiumProducts);

// const filteredProducts = products.filter(product => product[1]<= 300);
// const nonPremiumProducts = filteredProducts.map(product => [product[0], product[1]-product[1]*15/100])

// console.log(nonPremiumProducts);

// let productStock = products.reduce((stocks, product) => {
//     let stockItem = stocks.find(stock => stock[0] === product[0]);

//     if(!stockItem)
//         stocks.push(product[0], 1)
//     else 
//         ++stockItem[1];

//     return stocks;
// },[])

// console.log(productStock)

const nonPremiumProducts = products.filter(product => product[1]<=300)
    .map(prod=>[prod[0].toUpperCase(),prod[1]])
    .reduce((stocks, currentProduct)=>{
        let stockItem = stocks.find(item=>item[0]===currentProduct[0]);
        if(!stockItem)
            stocks.push([product[0],1]);
        else
            stockItem = ++stockItem[1];

        return stocks;
    },[])

console.log(nonPremiumProducts)
console.log("reached here")