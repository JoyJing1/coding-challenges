// STAIRCASE
function StairCase(n) {
    for (let i = 1; i <= n; i++) {
        let string = "";
        for(let j = 0; j < n-i; j++) { string += " "; }
        for(let k = 0; k < i; k++) { string += "#"; }
        console.log(string);
    }

}

// SUM THEM ALL
function sum(numbers) {
    return numbers.reduce( (tot, el) => tot+el );
}
