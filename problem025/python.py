class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverse_k_group(head, k):
    # Python solution for reversing nodes in k-groups goes here
    return 'r'


def print_list(head):
    current = head
    while current:
        print(current.val, end=" -> ")
        current = current.next
    print("None")


head1 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
k1 = 3
result1 = reverse_k_group(head1, k1)
print_list(result1)

head2 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
k2 = 2
result2 = reverse_k_group(head2, k2)
print_list(result2)
