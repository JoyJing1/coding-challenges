const _ = require("lodash");


console.log(_.empty([]));
debugger;

function heapSort(arr) {
  let heap = [];

  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
    heap.heapifyUp(heap.length-1);
  }

  let sortedArr = [];
  while (heap.length > 0) {
    [ heap[0], heap[heap.length - 1] ] = [ heap[heap.length - 1], heap[0] ];
    sortedArr.push(heap.pop());
    heap.heapifyDown(0);
  }
  return sortedArr;
}


Array.prototype.heapifyUp = function(idx) {
  let childIdx = idx;
  let complete = false;
  while (!complete && childIdx > 0) {
    complete = true;
    console.log(childIdx);
    let parent = parentIdx(childIdx);
    if (this[parent] > this[childIdx]) {
      [ this[parent], this[childIdx] ] = [ this[childIdx], this[parent] ]
      complete = false;
      childIdx = parentIdx;
    }
  }
  // console.log(this);
}

[1,2,3,4,5,6,7,8,9,10,2.5].heapifyUp(10);

Array.prototype.heapifyDown = function(idx) {
  let parentIdx = idx;
  let children = childIdx(idx);

  // if (children.empty())
}


function parentIdx(childIdx) {
  return childIdx === 0 ? undefined : Math.floor((childIdx - 1) / 2)
}

function childIdx(parentIdx, length) {
  let children = [];
  let child1 = (2 * parentIdx) + 1;
  let child2 = (2 * parentIdx) + 2;
  if (child1 < length) { children.push(child1) }
  if (child2 < length) { children.push(child2) }
  return children;
}
