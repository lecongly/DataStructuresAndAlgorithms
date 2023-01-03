import {ListNode} from "./help";

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

const head = new ListNode(1, new ListNode(2, new ListNode(2)))
reverseList(head).traverse(head)