'use strict'

function isPrime () {
    const userNumber = +prompt('Enter a number');
    if (!isNaN(userNumber) && userNumber != null && +userNumber > 1) {
        for (let i = 2; i < userNumber; i++) {
            if (userNumber % i === 0) return false;
        }
    }
    return userNumber > 1;
}

console.log(isPrime());