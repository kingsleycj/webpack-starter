let timeoutId = setTimeout(function(){
    console.log('5 seconds passed');
}, 5000);

//to cancel ...
// clearTimeout(timeoutId);

let intervalId = setInterval(function(){
    console.log('1 second passed');
}, 1000);

// If need to clear ...
clearInterval(intervalId);

console.log(location.pathname);