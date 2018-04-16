function execute (array) {
  let sum = array[0]
  let max = array[0]
  for (let i = 1, len = array.length; i < len; i++) {
    if (sum > 0) {
      sum += array[i]
    } else {
      sum = array[i]
    }
    max = sum > max ? sum : max
  }
  return max
}

console.log(execute([1, -2, 3, 10, -4, 7, 2, -5]))