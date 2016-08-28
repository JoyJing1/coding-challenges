// Given an array of integers and a target,
// determine whether a subset of the integers
// sums to the target

function subsetSum(arr, target) {
  if (arr.length <= 0) {
    return false;
  } else {
    let sums = new Set;
    sums.add(0);

    for (let int of arr) {
      let newSums = new Set;
      for (let value of sums.keys()) {

        if (int + value === target) {
          return true;
        } else {
          newSums.add(int + value);
        }
      }
      sums = new Set([...newSums, ...sums]);
    }
    return false;
  }
}

console.log(subsetSum([1,2,4,6,8,9], 5)); // true
console.log(subsetSum([1,2,4,6,8,9], 30)); // true
console.log(subsetSum([1,2,4,6,8,9], 66)); // false
console.log(subsetSum([1,2,4,6,8,9], 100)); // false
