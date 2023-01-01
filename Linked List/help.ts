export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    traverse(head: ListNode) {
        let current: ListNode | null = head;
        while (current !== null) {
            console.log(current.val)
            current = current.next;
        }
    }
}