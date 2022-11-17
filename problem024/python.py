class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def swap_pairs(head):
    dummy = ListNode(0)
    dummy.next = head
    current = dummy

    while current.next and current.next.next:
        first = current.next
        second = first.next
        first.next = second.next
        second.next = first
        current.next = second
        current = first

    return dummy.next


def print_list(head):
    current = head
    while current:
        print(current.val, end=" -> ")
        current = current.next
    print("None")


head1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
result1 = swap_pairs(head1)
print_list(result1)

head2 = ListNode(1, ListNode(2, ListNode(3)))
result2 = swap_pairs(head2)
print_list(result2)
