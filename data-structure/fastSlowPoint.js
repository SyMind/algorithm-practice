// 判断链接表中是否含有环
function hasCycle(head) {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}

// 已知链表中含有环，返回这个环的起始点
function detectCycle(head) {
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            slow = head
            while (slow !== fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow
        }
    }
    return null
}
