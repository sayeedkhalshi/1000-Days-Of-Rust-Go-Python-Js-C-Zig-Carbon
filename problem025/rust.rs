pub fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    let mut dummy = Some(Box::new(ListNode::new(0)));
    let mut tail = &mut dummy;
    let mut stack = Vec::new();

    let mut current = &head;
    let mut count = 0;

    while count < k {
        if let Some(node) = current {
            stack.push(node.clone());
            current = &node.next;
            count += 1;
        } else {
            break;
        }
    }

    if count < k {
        // Restore the original order as there are fewer than k nodes.
        while let Some(node) = stack.pop() {
            tail = &mut tail.as_mut().unwrap().next;
            tail.as_mut().unwrap().next = Some(node);
        }
    } else {
        // Reverse the k nodes.
        while let Some(node) = stack.pop() {
            tail = &mut tail.as_mut().unwrap().next;
            tail.as_mut().unwrap().next = Some(node);
        }
    }

    // Continue with the remaining nodes.
    tail.as_mut().unwrap().next = reverse_k_group(current.clone(), k);

    dummy.unwrap().next
}
