pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut dummy = ListNode::new(0);
    dummy.next = head;
    let mut current = &mut dummy;

    while let Some(ref mut first) = current.next.take() {
        if let Some(ref mut second) = first.next.take() {
            first.next = second.next.take();
            second.next = Some(std::mem::replace(&mut current.next, Some(second)));
        }
        std::mem::swap(&mut first.next, &mut second.next);
        current = &mut current.next.as_mut().unwrap().next.as_mut().unwrap();
    }

    dummy.next
}
