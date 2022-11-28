// import { Car3 } from "./models/car.js";

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
// let car = {id: 5000, style: 'convertible'};
// let id, style;
// ({id, style} = car);
// console.log(id, style);

// Spread Syntax
function startCars(car1, car2, ...rest) {
  // console.log(rest);
}
let carIds = [1, 2, 3, 4, 5, 6];
startCars(...carIds);

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
  // console.log(i);
}

let userSettings = { name: "Jared" };
let defaultSettings = { name: "Default" };

// console.log(userSettings && defaultSettings)

// console.log( 99 > 21 ? 'yes': 'no');\

function startCar(carId) {
    let message = "Starting ...";
    let startFn = function turnKey() {
        message = "Override";
    };
    startFn();
  // console.log(message);
}
startCar(123);

let message = "Starting ...";
if (1 === 1) {
    let message = "Override ...";
    console.log(message);
}
console.log(message);

(function () {
    console.log("in function");
})(); // immediately invoked function expression (IIFES)

// IIFE
let app = (function () {
    let carID = 123;
    let getId = function () {
        return carID;
    };
    return {
        getId: getId,
    };
})();
// console.log(app.getId());

// using "call"
let o = {
    carid: 1234,
    getid: function () {
        console.log(this);
        return this.carid;
    },
};

// console.log(o.getid());
// let newCar = { carid: 456 };
// let newFn = o.getid.bind(newCar);
// console.log(newFn())
// console.log( o.getid.call(newCar));

// apply method
// let p = {
//     carids : 123,
//     getids:
// };
// let newCars = {carids: 456};
// console.log(p.getids.apply(newCars, ['ID: ']))

// let getID = (prefix, suffix) => prefix + 123 + suffix;

// console.log(getID('You ID is ', ", thank you"));

// Default parameters
let trackCar = function (carIDs, city = "NY") {
    console.log(`Tracking ${carIDs} in ${city}`);
};
console.log(trackCar(123));
console.log(trackCar(123, "chicago"));

// Constructor functions
// function Car(id){
//     this.carIDD = id;
//     this.start = function (){
//         console.log('Start: ' + this.carIDD);
//     };
// }
// let car = new Car(655);
// car.start();

// prototypes
function Car(id) {
    this.carIDD = id;
}

Car.prototype.start = function () {
    console.log("Start: " + this.carIDD);
};

let car = new Car(655);
car.start();

String.prototype.hello = function () {
    return this.toString() + " Hello";
};

console.log("foo".hello());

let cars = [{ carId: 123 }, { carId: 123 }, { carId: 123 }];
console.log(JSON.stringify(cars));

let jsonIn = `
        [
            { "carId": 123 },
            { "carId": 456 },
            { "carId": 789 }
        ]
        `;

let carIdss = JSON.parse(jsonIn);
console.log(JSON.stringify(carIdss));

let carIID = [
    { carId: 123, style: "sedan" },
    { carId: 456, style: "convertible" },
    { carId: 789, style: "suv" },
];
carIID.forEach((car) => console.log(car));
carIID.forEach((car, index) => console.log(car, index)); //Array Iteration

let convertibles = carIID.filter((car) => car.style === "convertible");
console.log(convertibles); //Array Filtering

let result = carIID.every((car) => car.carId > 0);
console.log(result); //Array Testing

let car1 = carIID.find((car) => car.carId > 500);
console.log(car1); //Locate the First Match "first instance only"

class Cars {
    constructor(id) {
    this.ids = id;
    }
    identify(suffix) {
    return `Your Car Id: ${this.ids} ${suffix}`;
    }
}

let carss = new Cars(123);
console.log(carss.identify("!!!"));

class Vehicle {
    constructor() {
        this.type = "car";
    }
    start() {
        return `, now Starting: ${this.type}`;
    }
}

class Car1 extends Vehicle {
    start() {
        return "Get in Car and Start " + super.start();
    }
}

let car2 = new Car1();
console.log(car2.type);
console.log(car2.start());

// let car3 = new Car3(123);
// console.log(car3.id);


console.log(innerWidth);
console.log(innerHeight);
