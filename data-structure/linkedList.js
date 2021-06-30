function defaultEquals(a, b) {
    return a === b
}

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor(equals = defaultEquals) {
        this.count = 0
        this.head = null
        this.equals = equals
    }

    push(element) {
        const node = new Node(element)

        if (this.head) {
            let current = this.head
            while (current.next) current = current.next
            current.next = node
        } else {
            this.head = node
        }

        this.count++

        return node
    }

    insert(element, index) {
        const node = new Node(element)

        if (index === 0) {
            node.next = this.head
            this.head = node
        }
        
        let position = 1
        let current = this.head

        while (current.next) {
            if (position === index) {
                node.next = current.next
                current.next = node

                this.count++

                return true
            }
            current = current.next
            position++
        }

        return false
    }

    getElementAt(index) {
        let position = 0
        let current = this.head

        while (current) {
            if (position === index) {
                return current
            }
            current = current.next
            position++
        }

        return null
    }

    remove(element) {
        if (this.equals(this.head.element, element)) {
            this.head = this.head.next
        }

        let current = this.head

        while (current.next) {
            if (this.equals(current.next.element, element)) {
                current.next = current.next.next

                this.count--

                return true
            }
            current = current.next
        }

        return false
    }

    removeAt(index) {
        if (index === 0) {
            node.next = this.head
            this.head = node
        }
        
        let position = 1
        let current = this.head

        while (current.next) {
            if (position === index) {
                current.next = current.next.next

                this.count--

                return true
            }
            current = current.next
            position++
        }

        return false
    }

    isEmpty() {
        return this.head === null
    }

    size() {
        return this.count
    }

    toString() {
        let result = ''

        if (this.head) {
            let current = this.head
            while (current) {
                result += String(current.element)
                current = current.next
            }
        }

        return result
    }
}

// TEST

const linkedList = new LinkedList()
linkedList.push(2)
linkedList.push(3)
linkedList.insert(6, 1)
linkedList.insert(8, 1)
linkedList.remove(8)
console.log('toString(): ', linkedList.toString())
console.log('getElementAt(1): ', linkedList.getElementAt(1))
console.log('size(): ', linkedList.size())
