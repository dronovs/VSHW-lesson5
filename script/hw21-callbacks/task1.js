'use strict'

function mainFunction (mathOperation, sum, exponent, difference, division, multiply, sinusOf) {
    function getOperand () {
        let operand = +prompt('Enter operand please');
        if (isNaN(operand)) {
            while (isNaN(operand)) {
                operand = +prompt('Enter a number')
            }
        }
        return operand;
    }

    if (mathOperation === 'sum') {
        return summing(getOperand(), getOperand());
    } else if (mathOperation === 'exponentiation') {
        return exponentiation(getOperand(), getOperand());
    } else if (mathOperation === 'diff') {
        return diff(getOperand(), getOperand());
    } else if (mathOperation === 'division') {
        return div(getOperand(), getOperand());
    } else if (mathOperation === 'multiply') {
        return multi(getOperand(), getOperand());
    } else if (mathOperation === 'sinusOf') {
        return sinus(getOperand());
    }
}


function summing (operand1, operand2) {
    return operand1 + operand2;
}

function exponentiation (number, degree) {
    return Math.pow(number, degree);
}

function diff (operand1, operand2) {
    return operand1 - operand2;
}

function div (operand1, operand2) {
    return operand1 / operand2;
}

function multi (operand1, operand2) {
    return operand1 * operand2;
}

function sinus (operand1) {
    return Math.sin(operand1);
}

let result = mainFunction('sinusOf', summing, exponentiation, diff, div, multi, sinus);
console.log(result);
