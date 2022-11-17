class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        const first = current.next;
        const second = first.next;
        first.next = second.next;
        second.next = first;
        current.next = second;
        current = first;
    }

    return dummy.next;
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
    new ListNode(2, new ListNode(3, new ListNode(4)))
);
const result1 = swapPairs(head1);
printList(result1);

const head2 = new ListNode(1, new ListNode(2, new ListNode(3)));
const result2 = swapPairs(head2);
printList(result2);
