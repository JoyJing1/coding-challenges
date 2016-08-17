const _ = require("underscore");

function processData(input) {

    lines = input.split("\n");
    t = parseInt(lines[0])

    for(let i = 0; i < t; i++) {
        let w = lines[i+1];
        let s = w.split("");
        console.log(w);

        if (w.length <= 1) {
          console.log("no answer");
          break;
        } else {
          let letters = [w[w.length-1]];

          for (let k = w.length-2; k >= 0; k--) {
            let currLetter = w[k];
            console.log(currLetter);

            if (currLetter < letters[letters.length-1]) {
              // loop through from back to front to find smallest that is larger
              let swapIdx = letters.length - 1;
              let swapLetter = letters[swapIdx];

              for(let j = swapIdx; j > i; j--) {
                if (letters[j] < currLetter) {
                  swapIdx = j;
                  swapLetter = letters[swapIdx];
                }
              }

              console.log("swapped letters");
              [s[i], s[swapIdx]] = [s[swapIdx],s[i]];
              console.log(s);
              // min = s.drop(i+1)

              let min = s.slice(i+1, s.length).sort();
              console.log(s);
              console.log(min);

              let final = s.slice(0, i+1).concat(min);
              console.log("final below");
              console.log(final.join(""));


            }


          }




        }

        if (w === s) {
          console.log("no answer");
        } else {
          console.log(s);
        }
    }

}


// processData("5\nab\nbb\nhefg\ndhck\ndkhc")
processData("1\nabcde") // bacde
