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

/*
在 AVL 树中，需要对每个节点计算右子树的高度（hr）和左子树高度（hl）之间的差值，该值（hr-hl）应为0、1或-1。
如果结果不是这三个值之一，则需要平衡该 AVL 树。这就是平衡因子的概念。

平衡操作 - AVL 旋转
向 AVL 树插入节点时，可以执行单旋转和双旋转两种平衡操作，分别对应四种场景。

左-左（LL）：向右的单旋转
这种情况出现宇节点的左侧子节点的高度大于右侧子节点的高度时，并且左侧子节点也是平衡或左侧较重的

右-右（RR）：向左的单旋转
出现于右侧子节点的高度大于左侧子节点的高度，并且右侧子节点也是平衡或右侧较重的。

左-右（LR）：向右的双旋转
这种情况出现于左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重的情况。

右-左（RL）：向左的双旋转
这种情况出现于右侧子节点的高度，并且右侧子节点左侧较重。
*/
class AVLTree {
    constructor(compareFn = defaultCompareFn) {
        this.compareFn = compareFn
        this.root = null
    }

    insert(key) {
        this.root = this.insertNode(node, key)
    }

    insertNode(node, key) {
        if (node == null) {
            return new Node(key)
        } else if (key > node.key) {
            node.right = this.insertNode(node.right, key)
        } else {
            node.left = this.insertNode(node.left, key)
        }

        const 
    }

    removeNode() {

    }

    getNodeHeight(node) {
        if (node == null) {
            return -1
        }

        return Math.max(
            this.getNodeHeight(node.left),
            this.getNodeHeight(node.right),
        ) + 1
    }

    getBalanceFactor(node) {
        return this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    }
}
