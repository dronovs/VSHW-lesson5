'use strict'

function isPrime () {
    const userNumber = +prompt('Enter a number');
    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) return false;
    }
    return userNumber > 1;
}

console.log(isPrime());