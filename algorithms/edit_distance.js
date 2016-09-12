// Can perform 3 operations:
// 1. Insert
// 2. Remove
// 3. Replace
// Calculate the min number of actions required to change string1 into string2

function editDistance(str1, str2, memo={}) {
  if (memo[[str1, str2]] !== undefined) { return memo[[str1, str2]]; }
  if (str1 === str2) { return 0; }
  if (str1 === "") { return str2.length; }
  if (str2 === "") { return str1.length; }
  if (str1[str1.length-1] === str2[str2.length-1]) {
    return editDistance(str1.slice(0, str1.length-1), str2.slice(0, str2.length-1));
  }

  let insert = editDistance(str1, str2.slice(0, str2.length-1));
  let remove = editDistance(str1.slice(0, str1.length-1), str2);
  let replace = editDistance(str1.slice(0, str1.length-1), str2.slice(0, str2.length-1));

  let minEdits = 1 + Math.min(insert, remove, replace);
  memo[[str1, str2]] = minEdits;

  return memo[[str1, str2]];
}

console.log(editDistance("geek", "gesek")); //1
console.log(editDistance("cat", "cut")); //1
console.log(editDistance("sunday", "saturday")); //3
// console.log(editDistance("cowabunga", "helzapoppin")); //10
console.log(editDistance("giffords", "giraffe")); //6
