import {ListNode} from "./help";

// T=O(n), S=O(1)
function hasCycle(head: ListNode | null): boolean {
    let slow = head
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};