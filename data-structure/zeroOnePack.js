function zeroOnePack(w, n, p) {
    const dp = []

    for (let i = 0; i <= w.length; i++) {
        dp[i] = []
        dp[i][0] = 0
    }

    for (let j = 1; j <= n.length; j++) {
        dp[0][j] = 0
    }

    for (let i = 1; i < w.length; i++) {
        for (let j = 1; j <= n.length; j++) {
            if (n[j] <= i) {
                dp[i][j] = Math.max(
                    dp[i - n[j]][j] + p[j],
                    dp[i][j - 1]
                )
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }

    return dp[w.length][n.length]
}
