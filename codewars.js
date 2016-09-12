// function listToArray(list) {
//   const result = [list.value];
//
//   let link = list;
//   while (link.next !== null) {
//     link = link.next;
//     result.push(link.value);
//   }
//   return result;
// }
//
// function listToArray(list) {
//   var array = [];
//   for (var node = list; node; node = node.next)
//     array.push(node.value);
//   return array;
// }
//
// var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
// var list2 = {value: "foo", next: {value: "bar", next: null}};
//
// listToArray(list1);
// // , [1, 2, 3]);
// listToArray(list2);
// // , ["foo", "bar"]);



// function duplicateEncode(word){
//   const letters = {};
//
//   word.toLowerCase().split("").forEach( el => {
//     if (letters[el]) {
//       letters[el] += 1;
//     } else {
//       letters[el] = 1;
//     }
//   });
//
//   let newString = "";
//   word.toLowerCase().split("").forEach( el => {
//     if (letters[el] > 1) {
//       newString += ")";
//     } else {
//       newString += "(";
//     }
//   });
//
//   return newString;
// }
//
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
//
// duplicateEncode("din");
// // ,"(((");
// duplicateEncode("recede");
// // ,"()()()");
// duplicateEncode("Success");
// // ,")())())","should ignore case");
// duplicateEncode("(( @");
// // "))((");



// function spinWords(sentence){
//   return sentence
//     .split(" ")
//     .map( word => {
//       if (word.length >= 5) {
//         return word.split("").reverse().join("");
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }
//
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
//
// spinWords( "Hey fellow warriors" );
//  // => returns "Hey wollef sroirraw"
// spinWords( "This is a test");
//  // => returns "This is a test"
// spinWords( "This is another test" );
// // => returns "This is rehtona test"
// spinWords("Hey fellow warriors");
// // , "Hey wollef sroirraw");

// function isIsogram(str){
//   const letters = {};
//
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i].toLowerCase();
//     if (letters[letter]) {
//       return false;
//     } else {
//       letters[letter] = true;
//     }
//   }
//   return true;
// }
//
// function isIsogram(str){
//   return !/(\w).*\1/i.test(str)
// }
//
// isIsogram("Dermatoglyphics");
// // , true );
// isIsogram("isogram");
// // , true );
// isIsogram("aba");
// // , false, "same chars may not be adjacent" );
// isIsogram("moOse");
// // , false, "same chars may not be same case" );
// isIsogram("isIsogram");
// // , false );
// isIsogram("");
// // , true
// // , "an empty string is a valid isogram" );


// Remove all punctuation and change capitalized letters to lower case for a given string.

function borrow(str) {
   return str.replace(/[^\w]/g, '').toLowerCase();
}

// return str.toLowerCase().replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
// .replace(/\s{2,}/g," ");;
console.log(borrow('WhAt! FiCK! DaMn CAke?')); //, 'whatfickdamncake');
console.log(borrow('THE big PeOpLE Here!!')); //, 'thebigpeoplehere');
console.log(borrow('i AM a TINY BoY!!')); //, 'iamatinyboy');
