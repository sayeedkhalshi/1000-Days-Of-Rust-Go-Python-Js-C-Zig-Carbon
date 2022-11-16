pub fn merge_k_sorted_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
    let mut lists = lists;
    let mut min_heap = BinaryHeap::new();

    for list in lists.iter_mut() {
        if let Some(mut node) = list.take() {
            min_heap.push(Reverse(node.val));
            while let Some(next) = node.next.take() {
                min_heap.push(Reverse(next.val));
                node = next;
            }
        }
    }

    let mut dummy = ListNode::new(0);
    let mut current = &mut dummy;

    while let Some(Reverse(val)) = min_heap.pop() {
        current.next = Some(Box::new(ListNode::new(val)));
        current = current.next.as_mut().unwrap();
    }

    dummy.next.take()
}
