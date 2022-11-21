// import '../styles/index.scss';

// console.log('webpack starterkit');
//REST parameters
// function sendCars (...allCarIds) {
//     allCarIds.forEach(id => console.log(id));
// }

// sendCars('monday', 1, 2, 5);

// Destructing Arrays
// let carIds = [1, 2, 5]
// let car1, car2, theRest;
// [car1, car2, ...theRest] = carIds;
// console.log(car1, car2, theRest);

// Destructing Objects
let car = {id: 5000, style: 'convertible'};
let id, style;
({id, style} = car);
// console.log(id, style);

// Spread Syntax
function startCars(car1, car2, ...rest){
    console.log(rest);
}

let carIds = [1, 2, 3, 4, 5, 6];
startCars(...carIds);


