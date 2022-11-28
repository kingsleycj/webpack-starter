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

// let promise = new Promise (
//     function (resolve, reject) {
//         setTimeout(reject, 100, 'somevalue');
//     }
// );
// promise.then(
//     value => console.log('fulfilled: ' + value ),
//     error => console.log('rejected: ' + error )
// );

//HTTP Requests from XHR
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
        console.log(this.responseText);
    }
};
xhttp.open('GET', 'http://5632a4fd82407e001413f1df.mockapi.io/api/v1/users', true);
xhttp.send();
