'use strict'
function numberDegree (num, deg) {
     num = +prompt('Please enter a number!');
     deg = +prompt('Please enter degree!');
     return Math.pow(num, deg);
}

console.log(numberDegree());