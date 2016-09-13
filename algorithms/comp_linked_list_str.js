// Given two linked lists, represented as linked lists
// (every character is a node in linked list).
// Write a function compare() that works similar to strcmp(),
// i.e., it returns 0 if both strings are same,
// 1 if first linked list is lexicographically greater,
// and -1 if second string is lexicographically greater.

function comp(linkedList1, linkedList2) {
  let link1 = linkedList1;
  let link2 = linkedList2;

  while (link1 !== undefined && link2 !== undefined) {
    if (link1 > link2) { return 1; }
    if (link2 > link1) { return -1; }

    link1 = link1.next;
    link2 = link2.next;
  }

  if (link1 !== undefined) { return 1; }
  if (link2 !== undefined) { return -1; }
  return 0;
}
