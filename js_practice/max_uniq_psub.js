// Given a string, find the lexigraphically largest pseudo-substring
// Make it run in O(n) time

// Move from end --> beginning
// If curr_first_letter is > new_letter, do not replace it
// If new_letter > curr_first_letter, tack new_letter to beginning


function maxUniqPsub(str) {
  if (str.length <= 1) {
    return str;
  }

  let psub = str[str.length-1];

  for(let i = str.length-2; i >= 0; i--) {
    if (str[i] < psub[0]) {
      psub[0] = str[i];
    } else {
      psub = str[i] + psub;
    }
  }

  return psub;
}

console.log(maxUniqPsub("abcdefg"));
console.log(maxUniqPsub("hgfedcba"));
console.log(maxUniqPsub("sdfkblqsdjaj"));
console.log(maxUniqPsub("bacdeg"));
console.log(maxUniqPsub("abcdcba"));
