// 筛数法

/**
 * 输入正整数 `n`，函数返回区间 [2, n) 中素数的个数
 */
function countPrime(n) {
    const isPrime = Array(n).fill(true)
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false
            }
        }
    }
    let count = 0
    for (let i = 0; i < n; i++) {
        if (isPrime[i]) {
            count++
        }
    }
    return count
}
