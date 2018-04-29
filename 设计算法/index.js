function mergeSort (a, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2)
    mergeSort(a, left, mid)
    mergeSort(a, mid + 1, right)
    merge(a, left, mid, right)
  }
  return a
}

function merge (a, left, mid, right) {
  let x = left, y = mid + 1, temp = []
  while (x <= mid && y <= right) {
    if (a[x] < a[y]) {
      temp.push(a[x++])
    } else {
      temp.push(a[y++])
    }
  }

  while (x <= mid) {
    temp.push(a[x++])
  }
  while (y <= right) {
    temp.push(a[y++])
  }

  temp.forEach((value, index) => {
    a[left + index] = value
  })
}

console.log(mergeSort([9, 8, 7, 6], 0, 3))