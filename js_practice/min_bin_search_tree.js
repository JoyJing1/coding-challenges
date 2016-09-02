// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.

// O(n) time, O(n) space

function minBinarySearchTree(arr) {
  if (arr.length <= 0) { return undefined; }
  const rootIdx = Math.floor(arr.length / 2);

  const root = new Node(arr[rootIdx]);
  const left = minBinarySearchTree(arr.slice(0, rootIdx));
  const right = minBinarySearchTree(arr.slice(rootIdx + 1));

  root.left = left;
  root.right = right;
  return root;
}
