class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseKGroup(head, k) {
    // JavaScript solution for reversing nodes in k-groups goes here
}

function printList(head) {
    let current = head;
    while (current) {
        process.stdout.write(`${current.val} -> `);
        current = current.next;
    }
    console.log("null");
}

const head1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const k1 = 3;
const result1 = reverseKGroup(head1, k1);
printList(result1);

const head2 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
const k2 = 2;
const result2 = reverseKGroup(head2, k2);
printList(result2);
