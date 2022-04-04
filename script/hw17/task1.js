'use strict'
let userNum = +prompt('Please enter a number!');
let userDeg = +prompt('Please enter degree!');
function numberDegree (num, deg) {
     return Math.pow(num, deg);
}

console.log(numberDegree(userNum, userDeg));