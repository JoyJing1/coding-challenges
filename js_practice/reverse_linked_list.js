function reverse(head) {
  if (head.next === undefined) { return head; }

  let prev = head;
  let curr = head.next;
  let next = curr.next;

  while (next !== undefined) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = curr.next;
  }

  curr.next = prev;
  return curr;
}

// 1 --> 2
// 
// prev = 1
// curr = 2
// next = undefined
//
// 2 --> 1


// 1 --> 2 --> 3 --> 4 --> 5
//
// prev = 4
// curr = 5
// next = undefined
//
// 5 --> 4 --> 3 --> 2 --> 1
