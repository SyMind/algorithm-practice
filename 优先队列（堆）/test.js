const Heap = require('./heap')

let heap = new Heap()
heap.insert(3)
heap.insert(2)
heap.insert(6)

let min = heap.findMin()
console.log(min)
console.log(heap.deleteMin())
min = heap.findMin()
console.log(min)