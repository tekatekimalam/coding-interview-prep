/*
Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

function sumSquareDifference(n) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i <= n; i++) {
        sum1 += Math.pow(i, 2);
        sum2 += i;
    }

    sum2 = Math.pow(sum2, 2);

    return sum2 - sum1;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));
