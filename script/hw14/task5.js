'use strict'
const arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i <= arr.length - 1; i++) {
    result += Math.pow(arr[i], 2);
}
console.log(result);