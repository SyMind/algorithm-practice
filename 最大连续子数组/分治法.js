function execute (array) {
  while (array.length > 1) {
    let len = array.length
    let mid = Math.floor(len / 2)

    let leftMax = execute(array.slice(0, mid))
    let rightMax = execute(array.slice(mid + 1))
    let a = 0, b = 0, c = 0
    for (let i = mid; i >= 0; i--) {
      a += array[i]
      if (a > b) b = a
    }
    a = 0
    for (let i = mid + 1; i < len; i++) {
      a += array[i]
      if (a > c) c = a
    }
    let midMax = b + c
    if (leftMax > rightMax && leftMax > midMax) {
      return leftMax
    } else if (rightMax > midMax && rightMax > leftMax) {
      return rightMax
    } else {
      return midMax
    }
  }
  return array[0]
}

console.log(execute([1, -2, 3, 10, -4, 7, 2, -5]))