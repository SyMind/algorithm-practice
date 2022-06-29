/**
 * 输入正整数 `n`，函数返回区间 [2, n) 中素数的个数
 */
function countPrimes(n) {
    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
}

function isPrime(num) {
    // i 不需要遍历到 num，而只需要遍历到 sqrt(n) 即可
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
