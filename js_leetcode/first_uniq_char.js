// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.



"use strict"
function something(a) {
  return () => {
    console.log("stuff");
  }
}

var firstUniqChar = function(s) {
  let chars = {};

  for(let i = 0; i < s.length; i++) {
    let char = s[i];
    if (chars[char] === undefined) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }

  for(let j = 0; j < s.length; j++) {
    let currChar = s[j];
    if ( chars[currChar] === 1 ) {
      return j;
    }
  }
  return -1
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("leleleledssds")); // -1
