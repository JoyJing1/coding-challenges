function processData(input) {
    //Enter your code here
    let lines = input.split("\n")
    let [n, k, q] = lines[0].split(" ").map( el => parseInt(el) );
    let arr = lines[1].split(" ").map( el => parseInt(el) );

    for (let i = 0; i < q; i++) {
        m = parseInt(lines[2+i])

        idx = (((m - k) % arr.length) + arr.length) % arr.length
        console.log(arr[idx])
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
