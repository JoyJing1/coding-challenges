function christmasTree(height) {
  let result = "";
  for(let level = 1; level <= height; level++) {
    let numStars = (level * 2) - 1;
    let padding = Math.floor(((height * 2) - 1 - numStars)/2);

    for (let i = 0; i < padding; i++) {result += " "}
    for (let j = 0; j < numStars; j++) {result += "*"}
    for (let k = 0; k < padding; k++) {result += " "}
    if (level < height) { result += "\n" };
  }
  return result;
}

console.log(christmasTree(1));
console.log(christmasTree(3));
console.log(christmasTree(7));
console.log(christmasTree(10));

function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}





// describe("Christmas tree", function () {
//   it ("should return correct christmas tree for height 1", function(){
//   	Test.assertEquals(christmasTree(1), "*");
// 	});
// 	it ("should return correct christmas tree for height 2", function(){
// 		Test.assertEquals(christmasTree(2), " * \n***");
// 	});
// 	it ("should return correct christmas tree for height 3", function(){
// 		Test.assertEquals(christmasTree(3), "  *  \n *** \n*****");
// 	});
// 	it ("should return correct christmas tree for height 4", function(){
// 		Test.assertEquals(christmasTree(4), "   *   \n  ***  \n ***** \n*******");
// 	});
// 	it ("should return correct christmas tree for height 5", function(){
// 		Test.assertEquals(christmasTree(5), "    *    \n   ***   \n  *****  \n ******* \n*********");
// 	});
// 	it ("should return correct christmas tree for height 6", function(){
// 		Test.assertEquals(christmasTree(6), "     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********");
// 	});
// 	it ("should return correct christmas tree for height 7", function(){
// 		Test.assertEquals(christmasTree(7), "      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************");
// 	});
// 	it ("should return correct christmas tree for height 8", function(){
// 		Test.assertEquals(christmasTree(8), "       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************");
// 	});
// 	it ("should return correct christmas tree for height 9", function(){
// 		Test.assertEquals(christmasTree(9), "        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************");
// 	});
// 	it ("should return correct christmas tree for height 10", function(){
// 		Test.assertEquals(christmasTree(10), "         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************");
// 	});
// });
