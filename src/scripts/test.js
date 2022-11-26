let timeoutId = setTimeout(function(){
    console.log('1 seconds passed');
}, 1000);

//to cancel ...
// clearTimeout(timeoutId);

let intervalId = setInterval(function(){
    console.log('1 second passed');
}, 1000);

// If need to clear ...
clearInterval(intervalId);

// console.log(location.pathname);



// let eli = document.getElementById('first');
// console.log(el);

// try {
//     throw new Error("this is my custom error");
// } 
// catch (error) {
//     console.log("error: ", error);
// }
// finally {
//     console.log("Always Executes");
// }

let promise = new Promise (
    function (resolve, reject) {
        setTimeout(resolve, 100, 'somevalue');
    }
);

console.log(promise);