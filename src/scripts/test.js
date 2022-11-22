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

console.log(location.pathname);



// let eli = document.getElementById('first');
// console.log(el);