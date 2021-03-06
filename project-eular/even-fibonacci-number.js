/*
Problem 2: Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.


*/

function fiboEvenSum(num) {
    let arr = [];
    let n = [0, 1];
    let temp;
    let res = 0;

    for (let i = 0; i < num; i++) {
        temp = n[0] + n[1];
        n[0] = n[1];
        n[1] = temp;

        arr.push(temp);
    }

    arr.forEach((num) => {
        if (num % 2 === 0) {
            res += num;
        }
    });

    console.log(arr, res);
}

fiboEvenSum(8);
