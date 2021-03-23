// This is an to practice traversing a linked list.
// Given a pointer to the head node of a linked list, print each node's data element, one per line. 
// If the head pointer is null(indicating the list is empty), there is nothing to print.

// Function Description
// Complete the printLinkedList function in the editor below.
// printLinkedList has the following parameter(s):
// SinglyLinkedListNode head: a reference to the head of the list

// Print
// For each node, print its data value on a new line(console.log in Javascript).

// Input Format
// The first line of input contains, the number of elements in the linked list.
// The next n lines contain one element each, the data values for each node.

// Note: Do not read any input from stdin / console.Complete the printLinkedList function in the editor below.

// Constraints
// 1 <= n <= 1000
// 1 <= list[i] <= 1000, where list[i] is the ith element of the linked list.

// Sample Input
// 2
// 16
// 13

// Sample Output
// 16
// 13

// Explanation
// There are two elements in the linked list.
// They are represented as 16 -> 13 -> NULL.
// So, the printLinkedList function should print 16 and 13 each on a new line.

function printLinkedList(head) {
    let current = head;

    while (current != null) {
        console.log(current.data)
        current = current.next
    }

}