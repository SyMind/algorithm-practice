class Node {
    prev = null
    next = null

    constructor(key, val) {
        this.key = key
        this.val = val
    }
}

class DoubleList {
    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = head
        this.size = 0
    }

    addLast(node) {
        node.prev = this.tail.prev
        node.next = this.tail
        this.tail.prev.next = node
        this.tail.prev = node
        this.size++
    }

    remove(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size--
    }

    removeFirst() {
        if (this.head.next === this.tail) {
            return null
        }
        const first = head.next
        this.remove(first)
        return first
    }
}

class LRUCache {
    map = new Map()
    cache = new DoubleList()

    constructor(capacity) {
        this.capacity = capacity
    }

    makeRecently(key) {
        const node = this.map.get(key)
        this.cache.remove(node)
        this.cache.addLast(node)
    }

    addRecently(key, val) {
        const node = new Node(key, val)
        this.cache.addLast(node)
        this.map.add(key, node)
    }

    deleteKey(key) {
        const node = this.map.get(key)
        this.cache.remove(node)
        this.map.remove(key)
    }

    removeLeastRecently() {
        const deleteNode = cache.removeFirst()
        this.map.remove(deleteNode.key)
    }

    get(key) {
        if (!this.map.has(key)) {
            return null
        }

        this.makeRecently(key)
        return this.map.get(key).val
    }

    put(key, val) {
        if (this.map.has(key)) {
            this.deleteKey(key)
            this.addRecently(key, val)
            return
        }

        if (this.capacity === this.cache.size) {
            this.removeLeastRecently()
        }

        this.addRecently(key, val)
    }
}
