function processData(input) {
    //Enter your code here
    lines = input.split("\r\n")
    inputIdx = 0;
    const t = lines[inputIdx];
    inputIdx += 1;
    //console.log(lines)


    for (let testIdx=0; testIdx < t; testIdx++) {
        // Pull n & m
        let [n, m] = lines[inputIdx].split(" ").map( el => parseInt(el))
        inputIdx += 1;

        console.log("number of edges:")
        console.log(m)

        // create all edges
        let edges = [];
        for (let edgeIdx = 0; edgeIdx < m; edgeIdx++) {
            edge = lines[inputIdx].split(" ").map( el => parseInt(el))
            edges.push(edge)
            inputIdx += 1
        }

        edges.forEach( edge => edge.push("w"))
        console.log(edges)
        // debugger;
        console.log(lines[inputIdx]);
        source = parseInt(lines[inputIdx])

        inputIdx += 1

        console.log(source)

        // Do graph parsing here
        let nodeDist = new Array(n).fill(-1);
        console.log(nodeDist);
        nodeDist[source-1] = 0;

        let toProcess = edges.filter( edge => edge[0] == source );
        let haveProcessed = [];

        while (toProcess.length > 0) {
            console.log(toProcess);
            currEdge = toProcess.shift();
            currEdge[2] = "g";

            startNode = currEdge[0];
            endNode = currEdge[1];
            currDist = nodeDist[startNode-1] + 6;

            if(nodeDist[endNode-1] === -1 || nodeDist[endNode-1] > currDist) {
                nodeDist[endNode-1] = currDist
            }

            newEdges = edges.filter( edge => edge[0] === endNode && edge[2] === "w");
            toProcess = toProcess.concat(newEdges);
            currEdge[2] = "b";
        }
        console.log("nodeDist below:")
        console.log(nodeDist.filter( dist => dist !== 0).join(" "))
    }

}

// processData("2\r\n4 2\r\n1 2\r\n1 3\r\n1\r\n3 1\r\n2 3\r\n2")
processData("1\r\n4 5\r\n1 2\r\n2 3\r\n3 1\r\n3 4\r\n2 4\r\n1")



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
