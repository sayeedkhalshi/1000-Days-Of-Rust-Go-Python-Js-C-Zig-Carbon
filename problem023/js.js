class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return root;
    }

    bubbleUp() {
        let index = this.size - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent.val <= element.val) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.size;
        const element = this.heap[0];
        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.val < element.val) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    lists.forEach((list) => {
        while (list) {
            minHeap.push(list);
            list = list.next;
        }
    });

    const dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.size > 0) {
        const node = minHeap.pop();
        current.next = node;
        current = current.next;
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

const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));
const lists = [l1, l2, l3];
const result = mergeKLists(lists);
printList(result);
