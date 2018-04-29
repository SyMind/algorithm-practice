function Heap () {
  this.size = 0
  this.elements = []
}

Heap.prototype.makeEmpty = function () {
  this.size = 0
  this.elements = []
}

Heap.prototype.insert = function (x) {
  if (!this.size) {
    this.elements[0] = x
    this.size++
    return
  }

  let i
  for (i = ++this.size; this.elements[Math.floor(i / 2)] > x; i = Math.floor(i /= 2)) {
    this.elements[i - 1] = this.elements[Math.floor(i / 2) - 1]
  }
  this.elements[i - 1] = x
}

Heap.prototype.deleteMin = function () {
  if (!this.size) {
    return null
  }

  let i, child, minElement, lastElement
  minElement = this.elements[0]
  lastElement = this.elements[--this.size]

  for (i = 1; i * 2 <= this.size; i = child + 1) {
    child = i * 2
    if (child <= this.size &&
      this.elements[child - 1] < this.elements[child]) {
      child--
    }
    if (lastElement > this.elements[child]) {
      this.elements[i - 1] = this.elements[child]
    } else {
      break
    }
  }
  this.elements[i - 1] = lastElement
  return minElement
}

Heap.prototype.findMin = function () {
  return this.elements[0]
}

module.exports = Heap
