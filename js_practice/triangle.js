//Given the (x, y) coördinates of points A, B, C, and P,
// write a function to determine whether P lies inside triangle ABC.

// Method: determine whether P is below 1-2 lines between A, B, and C
// P must also be above 1-2 lines
// Need to calculate the respective y-coordinate for P's x-coordinate, that would fall on the line AB
// Check that x is within range, and whether the y would fall below/above
// Since counting a point that falls on the line as both below and above, check that at least 1 below and at least 1 above

function insideTriangle(a, b, c, p) {
  const edges = [ [a, b], [b,c], [c,a] ];

  const topEdges = edges.filter( edge => {
    return withinXRange(edge, p) && belowEdge(edge, p);
  });

  const bottomEdges = edges.filter( edge => {
    return withinXRange(edge, p) && aboveEdge(edge, p);
  });

  if (topEdges.length >= 1 && bottomEdges.length >= 1) {
    return true;
  } else {
    return false;
  }
}

function withinXRange(edge, p) {
  const x1 = edge[0][0];
  const x2 = edge[1][0];

  return Math.min(x1, x2) <= p[0] && p[0] <= Math.max(x1, x2);
}

function belowEdge(edge, p) {
  const x1 = edge[0][0];
  const x2 = edge[1][0];
  const y1 = edge[0][1];
  const y2 = edge[1][1];

  if (x1 === x2) {
    // Vertical line
    const xEqual = (p[0] === x1);
    const onLine = (Math.min(y1, y2) <= p[1] && p[1] <= Math.max(y1, y2));
    return xEqual && onLine;
  } else if (y1 === y2) {
    // Horizontal line
    return y1 >= p[1];
  } else {
    // Diagonal line
    const slope = (y2 - y1) / (x2 - x1);
    const b = y1 - (slope * x1);

    const lineY = p[0]*slope + b;
    return lineY >= p[1];
  }
}

function aboveEdge(edge, p) {
  const x1 = edge[0][0];
  const x2 = edge[1][0];
  const y1 = edge[0][1];
  const y2 = edge[1][1];

  if (x1 === x2) {
    // Vertical line
    const xEqual = (p[0] === x1);
    const onLine = (Math.min(y1, y2) <= p[1] && p[1] <= Math.max(y1, y2));
    return xEqual && onLine;
  } else if (y1 === y2) {
    // Horizontal line
    return y1 <= p[1];
  } else {
    // Diagonal line
    const slope = (y2 - y1) / (x2 - x1);
    const b = y1 - (slope * x1);

    const lineY = p[0]*slope + b;
    return lineY <= p[1];
  }
}


console.log(insideTriangle([1,3], [4,1], [3,5], [3,3])); // true
console.log(insideTriangle([1,3], [4,1], [3,5], [2,1])); // false
console.log(insideTriangle([0,0], [6,0], [5,3], [2.5, 1])); // true
console.log(insideTriangle([0,0], [6,0], [5,3], [2, 2])); // false
console.log(insideTriangle([0,0], [6,0], [5,3], [0, 0])); // true
console.log(insideTriangle([2,2], [-2,0], [1,-1], [1, 1])); // true
console.log(insideTriangle([2,2], [-2,0], [1,-1], [-1, -1])); // false
