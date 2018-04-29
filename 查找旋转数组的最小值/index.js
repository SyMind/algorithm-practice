function execute (array) {
  if (array[0] < array[array.length - 1]) {
    for (let i = 0, len = array.length; i <= len - 2; i++) {
      if (array[i] < array[i + 1]) {
        return array[i]
      }
    }
  } else {
    for (let i = array.length; i >= 1; i--) {
      if (array[i] < array[i - 1]) {
        return array[i]
      }
    }
  }
}

console.log(execute([4, 5, 6, 7, 0, 1, 2]))
console.log(execute([2, 1, 0, 4, 3]))