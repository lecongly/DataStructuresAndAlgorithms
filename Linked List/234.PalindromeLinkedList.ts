import {ListNode} from './help';

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }
    let reverse: ListNode | null = null;
    while (slow) {
        let next = slow.next;
        slow.next = reverse;
        reverse = slow;
        slow = next;
    }
    let current: ListNode | null = head;
    while (reverse) {
        if (current!.val !== reverse.val) {
            return false;
        }
        current = current!.next;
        reverse = reverse.next;
    }
    return true;
};