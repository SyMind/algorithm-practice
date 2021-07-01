function defaultCompareFn(a, b) {
    return a - b
}

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(compareFn = defaultCompareFn) {
        this.compareFn = compareFn
        this.root = null
    }

    insert(key) {
        if (this.root) {
            this.insertNode(this.root, key)
        } else {
            this.root = new Node(key)
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) > 0) {
            if (node.right) {
                this.insertNode(node.right, key)
            } else {
                node.right = new Node(key)
            }
        } else {
            if (node.left) {
                this.insertNode(node.left, key)
            } else {
                node.left = new Node(key)
            }
        }
    }

    search(key) {
        return this.searchNode(this.root, key)
    }

    searchNode(node, key) {
        if (node == null) {
            return false
        }if (node.key === key) {
            return true
        } else if (this.compareFn(key, node.key) > 0) {
            return this.searchNode(node.right, key)
        } else {
            return this.searchNode(node.left, key)
        }
    }

    inOrderTraverse() {
        return this.inOrderTraverseNode(this.root)
    }
    
    inOrderTraverseNode(node) {
        let result = []

        if (node) {
            result.push(node.key)
            result = result.concat(this.inOrderTraverseNode(node.left))
            result = result.concat(this.inOrderTraverseNode(node.right))
        }

        return result
    }

    preOrderTraverse() {
        return this.preOrderTraverseNode(this.root)
    }

    preOrderTraverseNode(node) {
        let result = []

        if (node) {
            result = result.concat(this.inOrderTraverseNode(node.left))
            result.push(node.key)
            result = result.concat(this.inOrderTraverseNode(node.right))
        }

        return result
    }

    postOrderTraverse() {
        return this.postOrderTraverseNode(this.root)
    }

    postOrderTraverseNode(node) {
        let result = []

        if (node) {
            result = result.concat(this.postOrderTraverseNode(node.right))
            result.push(node.key)
            result = result.concat(this.postOrderTraverseNode(node.left))
        }

        return result
    }

    min() {
        if (this.root == null) {
            return null;
        }

        let current = this.root
        while (current.left) current = current.left
        return current.key
    }

    max() {
        if (this.root == null) {
            return null;
        }

        let current = this.root
        while (current.right) current = current.right
        return current.key
    }

    minNode(node) {
        if (!node) {
            return null
        }

        if (node.right) {
            return this.minNode(node.right)
        }

        return node.value
    }

    remove(key) {
        this.root = this.removeNode(this.root, key)
    }

    removeNode(node, key) {
        if (!node) {
            return null
        } if (this.compareFn(node.key, key) > 0) {
            return this.removeNode(node.right, key)
        } else if (this.compareFn(node.key, key) < 0) {
            return this.removeNode(node.left, key)
        } else {
            if (node.left == null) {
                return node.right
            } else if (node.right == null) {
                return node.left
            } else {
                const rightMinNode = this.minNode(node.right)
                rightMinNode.right = this.removeNode(node.right, rightMinNode.key)
                return rightMinNode
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
console.log('inOrderTraverse()', tree.inOrderTraverse())
console.log('search(3)', tree.search(3))
console.log('search(20)', tree.search(20))
console.log('min()', tree.min())
console.log('max()', tree.max())
