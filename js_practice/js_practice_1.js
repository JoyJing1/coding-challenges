// DIGITAL ROOT

function digitalRoot(num) {
  if (num < 10) {
    return num;
  }

  let first = num % 10;
  let tens = Math.floor(digitalRoot(num / 10));
  if (first + tens > 10) {
    return digitalRoot(first + tens);
  } else {
    return first + tens;
  }
}

// console.log(digitalRoot(10));
// console.log(digitalRoot(15));
// console.log(digitalRoot(96));


// CAESAR CIPHER

function caesarCipher(message, shift) {
  let letters = [];
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    letters.push(String.fromCharCode(i));
  }

  return message.split("")
    .map( letter => {
      let idx = letters.indexOf(letter);
      let newIdx = (idx + shift) % letters.length;
      return letters[newIdx];
    })
    .join("");

}

// console.log(caesarCipher("abcd", 5));
// console.log(caesarCipher("zyxw", 3));
// console.log(caesarCipher("theand", 10));


// COMMON SUBSTRINGS

function commonSubstrings(str1, str2) {
  let longest = "";

  for(let i = 0; i < str1.length-1; i++) {
    for(let j = i+1; j <= str1.length; j++) {
      let substring = str1.slice(i, j);
      if (str2.includes(substring) && substring.length > longest.length) {
        longest = substring;
      }
    }
  }

  return longest;
}

// console.log(commonSubstrings("abcde", "ewrwerbcdesdfsf"));
// console.log(commonSubstrings("abcde", "abcaaaaa"));
// console.log(commonSubstrings("abcde", "aaaa"));
// console.log(commonSubstrings("abcde", "aaaaabcd"));
// console.log(commonSubstrings("abcde", "eeeecd"));


// TWO SUM

function twoSum(ints, target) {
  let nums = {};
  let result = [];

  for(let i = 0; i < ints.length; i++) {
    let val = ints[i];

    if (nums[target-val] !== undefined) {
      result = [nums[target-val] + 1, i + 1];
      break;
    } else if (nums[val] === undefined) {
      nums[val] = i;

    }
  }

  return result;
}

// console.log(twoSum([1,2,4,5], 6));
// console.log(twoSum([1,2,2,1,5], 6));
// console.log(twoSum([-4,1,2,0,1,5], -3));


// RECURSIVE SUM

function recursiveSum(arr) {
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + recursiveSum(arr.slice(1, arr.length));
  }
}

// console.log(recursiveSum([1,3,5,8]));
// console.log(recursiveSum([1,3,-5,2]));
// console.log(recursiveSum([0,0,8,0]));
// console.log(recursiveSum([]));
// console.log(recursiveSum([99]));


// FIBONACCI SEQUENCE

function fibonacci(n) {
  let fib = [1,1];

  if (n <= 2) {
    return fib.slice(0, n);

  } else {
    while (fib.length < n) {
      let newFib = fib[fib.length - 1] + fib[fib.length - 2];
      fib.push(newFib);
    }

    return fib;
  }
}

// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(10));

// SUBSETS

function subsets(arr) {
  if (arr.length < 1) {
    return [[]];
  } else {
    const el = arr[0];
    let origSubsets = subsets(arr.slice(1, arr.length));
    return origSubsets.map( sub => sub.concat(el)).concat(origSubsets);
  }
}

// console.log(subsets([]));
// console.log(subsets([0]));
// console.log(subsets([1,2,5]));
// console.log(subsets([1,2,5,9,10]));


// LONGEST PALINDROME

function longestPalindrome(str) {
  let maxStart = 0;
  let maxEnd = 0;
  let maxLength = 0;
  let maxCenter = 0;

  for (let i = 0; i < str.length; i++) {
    let oddMax = oddPalindrome(str, i);
    if (oddMax*2+1 > maxLength) {
      maxStart = i - oddMax;
      maxEnd = i + oddMax + 1;
      maxLength = (2 * oddMax) + 1;
      maxCenter = i;
    }

    let evenMax = evenPalindrome(str, i);
    if (evenMax*2 > maxLength) {
      maxStart = i - evenMax + 1;
      maxEnd = i + evenMax + 1;
      maxLength = (2 * evenMax);
      maxCenter = i;
    }
  }

  return str.slice(maxStart, maxEnd);
}

function oddPalindrome(str, idx) {
  let max = 0;
  let i = 1;
  let start = idx - i;
  let end = idx + i;

  while (start >= 0 && end < str.length && str[start] === str[end]) {
    max = i;
    i += 1;
    start = idx - i;
    end = idx + i;
  }

  return max;
}

function evenPalindrome(str, idx) {
  let start = idx;
  let end = idx + 1;
  let max = 0;

  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start -= 1;
    end += 1;
    max += 1;
  }
  return max;
}

console.log(longestPalindrome("wood"));
console.log(longestPalindrome("doggoy"));
console.log(longestPalindrome("dogggoy"));
console.log(longestPalindrome("abcdedcba"));
console.log(longestPalindrome("aa"));
console.log(longestPalindrome("abababab"));
console.log(longestPalindrome("the"));
