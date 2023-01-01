import {ListNode} from './help';

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(2)))

removeElements(head, 2).traverse(head)