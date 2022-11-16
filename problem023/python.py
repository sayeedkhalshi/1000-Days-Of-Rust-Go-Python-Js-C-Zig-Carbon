import heapq


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def merge_k_sorted_lists(lists):
    min_heap = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(min_heap, (node.val, i))

    dummy = ListNode(0)
    current = dummy

    while min_heap:
        val, i = heapq.heappop(min_heap)
        current.next = ListNode(val)
        current = current.next

        next_node = lists[i].next
        lists[i] = next_node

        if next_node:
            heapq.heappush(min_heap, (next_node.val, i))

    return dummy.next


def print_list(head):
    current = head
    while current:
        print(current.val, end=" -> ")
        current = current.next
    print("None")


l1 = ListNode(1, ListNode(4, ListNode(5)))
l2 = ListNode(1, ListNode(3, ListNode(4)))
l3 = ListNode(2, ListNode(6))
lists = [l1, l2, l3]
result = merge_k_sorted_lists(lists)
print_list(result)
