// Partition problem is to determine whether a given array of integers
// can be partitioned into two subsets such that
// the sum of elements in both subsets is the same.

function canPartition(arr) {
  let sum = arr.reduce( (all, el) => all + el );
  if (sum % 2 === 1) { return false; }

  return isSubsetSum(arr, arr[arr.length - 1], sum/2);
}

function isSubsetSum(arr, n, sum) {
  if (sum === 0) { return true; }
  if (sum === n) { return true; }
  if (arr.length <= 0) { return false; }

  let include = isSubsetSum(arr.slice(0, arr.length-1), arr[arr.length-2], sum - n);
  let exclude = isSubsetSum(arr.slice(0, arr.length-1), arr[arr.length-2], sum);

  return include || exclude;
}

console.log(canPartition([1,5,11,5])); // true
console.log(canPartition([1,5,11,6])); // false
console.log(canPartition([1,5,21,16,1])); // truee
console.log(canPartition([1,5,21,6])); // false
