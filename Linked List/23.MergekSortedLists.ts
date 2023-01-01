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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])

    let mid = Math.floor(lists.length / 2)
    let left = lists.slice(0, mid)
    let right = lists.slice(mid)
    let leftSorted = mergeKLists(left)
    let rightSorted = mergeKLists(right)
    return mergeTwoLists(leftSorted, rightSorted)
};
