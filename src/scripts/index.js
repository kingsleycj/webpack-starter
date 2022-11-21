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
    // console.log(rest);
}
let carIds = [1, 2, 3, 4, 5, 6];
startCars(...carIds);

for ( let i = 0; i < 5; i++ ){
    if (i === 3){
        continue;
    }
    // console.log(i);
}

let userSettings = {name: 'Jared'};
let defaultSettings = {name:'Default'};

// console.log(userSettings && defaultSettings)

// console.log( 99 > 21 ? 'yes': 'no');\

function startCar(carId) {
    let message = "Starting ...";
    let startFn = function turnKey(){
        message = "Override"
    };
    startFn();
    // console.log(message);

}
startCar(123);


let message = "Starting ...";
if (1 === 1){
    let message = "Override ...";
    console.log(message);
}
console.log(message);

(function(){
    console.log('in function')
})(); // immediately invoked function expression (IIFES)

// IIFE
let app = (function(){
    let carID = 123;
    let getId = function(){
    return carID;
    }; 
    return {
        getId : getId
    };
})();
console.log(app.getId());

let o = {
    carid: 1234,
    getid: function (){
        console.log(this)
        return this.carid;
    }
};

console.log(o.getid());