import {ListNode} from "./help";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let mergedHead: ListNode
    if (list1.val < list2.val) {
        mergedHead = list1;
        mergedHead.next = mergeTwoLists(list1.next, list2);
    } else {
        mergedHead = list2;
        mergedHead.next = mergeTwoLists(list1, list2.next);
    }
    return mergedHead;
};

