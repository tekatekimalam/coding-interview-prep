/*
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?


*/

function fpb(a, b) {
    if (b === 0) return a;
    return fpb(b, a % b);
}

function kpk(a, b) {
    return (a * b) / fpb(a, b);
}

function smallestMult(n) {
    let maxLCM = 1;

    //Getting the LCM in the range
    for (let i = 2; i <= n; i++) {
        maxLCM = kpk(maxLCM, i);
    }
    return maxLCM;
}

console.log(smallestMult(20));
