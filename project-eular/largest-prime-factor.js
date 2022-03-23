/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

*/

function largestPalindromeProduct(n) {
    // Cari bilangan terbesar dari n digit
    let largestNum = [...Arraay(n)].reduce((a, c) => {
        a += 9;
    }, "");

    return largestNum;
}

console.log(largestPalindromeProduct(3));
