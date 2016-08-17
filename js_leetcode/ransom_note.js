// RANSOM NOTEE
// Can you construct a ransom note from a string of letters from a magazine?

function canConstruct(ransomNote, magazine) {
  let ransomChars = {};
  let magazineChars = {};

  for(let i = 0; i < ransomNote.length; i++) {
    let ransomChar = ransomNote[i];
    if (ransomChars[ransomChar]) {
      ransomChars[ransomChar] += 1;
    } else {
      ransomChars[ransomChar] = 1;
    }
  }

  for(let j = 0; j < magazine.length; j++) {
    let magChar = magazine[j];
    if (magazineChars[magChar]) {
      magazineChars[magChar] += 1;
    } else {
      magazineChars[magChar] = 1;
    }
  }

  for(let key of Object.keys(ransomChars)) {
    if (!magazineChars[key] || ransomChars[key] > magazineChars[key]) {
      return false;
    }
  }

  return true;
}


console.log(canConstruct("a", "b")); //-> false
console.log(canConstruct("aa", "ab")); //-> false
console.log(canConstruct("aa", "aab")); //-> true
console.log(canConstruct("aaaaaaaa", "bbbacdedfe")); // false
console.log(canConstruct("abacdedj", "aaaabecsejdefcaadd")) // true
