package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
	dummy := &ListNode{Val: 0, Next: head}
	current := dummy

	for current.Next != nil && current.Next.Next != nil {
		first := current.Next
		second := first.Next
		first.Next = second.Next
		second.Next = first
		current.Next = second
		current = first
	}

	return dummy.Next
}

func printList(head *ListNode) {
	current := head
	for current != nil {
		fmt.Printf("%d -> ", current.Val)
		current = current.Next
	}
	fmt.Println("nil")
}

func main() {
	head1 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}}}
	result1 := swapPairs(head1)
	printList(result1)

	head2 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3}}}
	result2 := swapPairs(head2)
	printList(result2)
}
