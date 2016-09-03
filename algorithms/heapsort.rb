require 'byebug'

def heapsort(arr)
  # Place all elements of array into a heap
  # Heapify down
  heap = []

  arr.each do |el|
    heap.push(el)
    heapify_up(heap, heap.length-1)
    p heap
  end
  p "final heap:"
  p heap
  # Remove all elements of heap into array
  # Swap first/last & heapify up
  sorted = []
  until heap.empty?
    heap[0], heap[-1] = heap[-1], heap[0]
    el = heap.pop()
    sorted.push(el)
    heapify_down(heap, 0)
    p heap
  end

  p "final sorted:"
  p sorted
end


def heapify_up(heap, idx)
  return if idx == 0
  child_idx = idx
  parent_idx = (idx - 1) / 2

  until child_idx == 0 || heap[parent_idx] <= heap[child_idx]
    heap[child_idx], heap[parent_idx] = heap[parent_idx], heap[child_idx]
    child_idx = parent_idx
    parent_idx = (idx - 1) / 2
  end

  heap
end

def heapify_down(heap, idx)
  parent_idx = idx
  child_idxs = children(idx, heap.length)
  return if child_idxs.empty?

  child_idx = child_idxs.min_by{ |el| heap[el] }
  p child_idxs
  p child_idx

  until child_idx.nil? || parent_idx >= heap.length || heap[parent_idx] <= heap[child_idx]
    heap[parent_idx], heap[child_idx] = heap[child_idx], heap[parent_idx]
    parent_idx = child_idx
    child_idxs = children(idx, heap.length)
    child_idx = child_idxs.min_by{ |el| heap[el] }
  end

  heap
end

def children(idx, length)
  child_idxs = [idx * 2 + 1, idx * 2 + 2]
  child_idxs.select { |el| el < length }
end

# p heapsort([7,1,3,4])
# p heapsort([1,4,0,5,2])
p heapsort([3,4,0,8,7,2,7,9])
# p heapsort([3,-4,0,8,-7,2,-4,7,-9])
# p heapsort([0,0,0,0,0])
# p heapsort([9,7,6,4,3,2,1,-5])
