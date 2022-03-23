/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

*/

function largestPalindromeProduct(n) {
    let arr = [];
    // Cari bilangan terbesar dari n digit
    const max = +[...Array(n)].reduce((a, c) => (a += 9), "");

    // Cari bilangan terkecil dari n digit
    const min = (max + 1) / 10;

    // Looping untuk mencari hasil perkalian untuk tiap-tiap n digit (dati terkecil sampai tebesar)
    for (let i = max; i >= min; i--) {
        for (let j = max; j >= min; j--) {
            let num = i * j;

            let revNum = [...String(num)].reverse().join("");

            // Cek apakah bilangan hasil perkalian adalah poliandrome
            if (num == revNum) {
                arr.push(num);
            }
        }
    }

    return Math.max(...arr);
}

console.log(largestPalindromeProduct(3));
