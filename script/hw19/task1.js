'use strict'

const arr = [-1, -2, -3, -1, -2, -3];

function getPositiveNumbersArr (arr) {
    if (arr.length === 0) return 'Array is empty';

    let positiveNumbers = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] >= 0) positiveNumbers.push(arr[i]);
    }
    return positiveNumbers.length > 0 ? positiveNumbers : null;
}

const newArr = getPositiveNumbersArr(arr);
console.log(newArr);