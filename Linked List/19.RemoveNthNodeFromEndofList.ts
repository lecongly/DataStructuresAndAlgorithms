import {ListNode} from './help';

// T=O(n), S=O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyHead = new ListNode(0, head)
    let slow = dummyHead;
    let fast = dummyHead;
    for (let i = 1; i <= n; i++) {
        fast = fast.next
    }
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummyHead.next
};