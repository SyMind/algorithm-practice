function insertSort (a) {
  let i, j, temp
  for (i = 1, len = a.length; i < len; i++) {
    for (j = i; j > 0; j--) {
      if (a[j - 1] > a[j]) {
        temp = a[j]
        a[j] = a[j - 1]
        a[j - 1] = temp
      } else {
        break
      }
    }
  }
  return a
}

console.log(insertSort([8, 6, 3, 2]))