// Still failing 1/3 of the specs
// Timing out on some

function processData(input) {
    let lines = input.split("\n");
    let [n, k] = lines[0].split(" ");
    let arr = lines[1].split(" ").map( el => parseInt(el) );
    if (arr.length <= 1) { return arr }

    let numSwaps = 0;
    let currSwapping = 0;

    while (numSwaps < k && currSwapping < arr.length-1) {
        // console.log(arr);

        let maxIdx = currSwapping;
        let max = arr[maxIdx];

        for(let i = currSwapping+1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIdx = i;
                max = arr[maxIdx];
            }
        }

        if (maxIdx > 0) {
            [arr[currSwapping], arr[maxIdx]] = [arr[maxIdx], arr[currSwapping]];
            numSwaps += 1;
        }
        currSwapping += 1;
    }

    console.log(arr.join(" "));
}

// Array.prototype.equals = function(arr2) {
//   if (this.length !== arr2.length) { return false; }
//   if ( !(this instanceof Array && arr2 instanceof Array) ) { return false; }
//   for(let i = 0; i < this.length; i++) {
//     if (this[i] !== arr2[i]) { return false; }
//   }
//
//   return true;
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });

// processData("5 1\n4 2 3 5 1");
// processData("3 1\n2 1 3");
// processData("2 1\n2 1");
// processData("5 5\n9 6 3 2 1");
processData("5 2\n1 3 5 6 7 9 10 14");
