function defaultToStrFn(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    }

    return item.toString()
}

class ValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

// 处理冲突有几种方法：分离链接、线性探查和双散列

// 线性探查法中如果我们只是移除了元素，就有可能在查找有相同 hash 的其它元素时找到一个空位置，导致算法出现问题。
// 有两种解决方法，如下：
// 一种是软删除方法，使用一个特殊值（标记）来表示键值对被删除了，而不是真的删除它。
// 第二种方法需要检验是否有必要将一个或多个元素移动到之前的位置。
class HashTable {
    constructor(toStrFn = defaultToStrFn) {
        this.toStrFn = toStrFn
        this.table = []
        this.capacity = 37
    }

    put(key, value) {
        const position = this.hashCode(key)

        // 分离链接
        // if (!this.table[position]) {
        //     this.table[position] = []
        // }
        // this.table[position].push(new ValuePair(key, value))

        // 线性探查
        let index = position
        while (this.table[index] && index != (position - 1) % this.capacity) {
            index = (index + 1) % this.capacity
        }
        this.table[index] = new ValuePair(key, value)
    }

    remove(key) {
        const position = this.hashCode(key)

        // 分离链接
        // const list = this.table[position]
        // if (list) {
        //     for (let i = 0; i < list.length; i++) {
        //         if (list[i].key === key) {
        //             list.splice(i, 1)

        //             return true
        //         }
        //     }
        // }
        // return false

        // 线性探查
        let index = position
        while (this.table[index].key !== key && index !== (position - 1) % this.capacity) {
            index = (index + 1) % this.capacity
        }
        if (this.table[index].key === key) {
            delete this.table[index]
            return true
        }
        return false
    }

    get(key) {
        const position = this.hashCode(key)

        // 分离链接
        // const list = this.table[position]
        // if (list) {
        //     return list.find(pair => pair.key === key)
        // }
        // return

        // 线性探查
        let index = position
        while (this.table[index].key !== key && index !== (position - 1) % this.capacity) {
            index = (index + 1) % this.capacity
        }
        return this.table[index]
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key
        }

        const str = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i)
        }

        return hash % this.capacity
    }

    hashCode(key) {
        return this.loseloseHashCode(key)
    }
}

// TEST

const hashTable = new HashTable()
hashTable.put('Gandalf', 'gandalf@email.com')
hashTable.put('John', 'johnsnow@email.com')
hashTable.put('Tyrion', 'tyrion@email.com')
hashTable.put('Jonathan', 'jonathan@email.com')
hashTable.put('Jamie', 'jamie@email.com')

console.log(hashTable.hashCode('Gandalf'), '- Gandalf')
console.log(hashTable.hashCode('John'), '- John')
console.log(hashTable.hashCode('Tyrion'), '- Tyrion')
console.log(hashTable.hashCode('Jonathan'), '- Jonathan')
console.log(hashTable.hashCode('Jamie'), '- Jamie')
console.log('hashTable', hashTable.table)
console.log('get(\'Jamie\')', hashTable.get('Jamie'))
