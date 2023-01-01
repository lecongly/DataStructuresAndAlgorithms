import {ListNode} from "./help";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    while (curr) {
        let nextDistinctVal = curr.next
        while (nextDistinctVal !== null && curr.val === nextDistinctVal.val) {
            nextDistinctVal = nextDistinctVal.next
        }
        curr.next = nextDistinctVal
        curr = nextDistinctVal
    }
    return head
};

const head = new ListNode(1, new ListNode(2, new ListNode(2)))

deleteDuplicates(head).traverse(head)