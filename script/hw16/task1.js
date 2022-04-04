'use strict'
const userNumber = +prompt('Enter a number');

function minDivisor () {
    if (userNumber < 1) return NaN;

    function isPrime () {
        for (let i = 2; i < userNumber; i++) {
            if (userNumber % i === 0) return false;
        }
        return userNumber > 1;
    }

    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) {
            return `the smallest divisor is ${i}`;
        } else if (isPrime (userNumber)){
            return 'Number is prime';
        }
    }
}

console.log(minDivisor(userNumber));