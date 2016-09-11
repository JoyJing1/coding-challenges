
function maxContigSubSum(arr) {
  let globalMax = arr[0];
  let localMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    localMax = Math.max(arr[i], localMax + arr[i]);
    globalMax = Math.max(localMax, globalMax);
  }

  return globalMax;
}

console.log(maxContigSubSum([-5,1,3,3,-2,-3,-7,6])); // 8
