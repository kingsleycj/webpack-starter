// import '../styles/index.scss';

// console.log('webpack starterkit');
function sendCars ( ...allCarIds) {
    allCarIds.forEach(id => console.log(id));
};

sendCars('monday', 1, 2, 5);
