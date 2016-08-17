// Write a jsonify function that works with
// integers, strings, arrays, hashes, and booleans
// Raise an error if not the proper type

function toJSON(el) {
  if (typeof el === "number") {
    return el.toString();

  } else if (typeof el === "string") {
    return `"${el}"`;

  } else if (typeof el === "boolean") {
    return el === true ? "true" : "false";

  } else if (el instanceof Array) {
    const els = el.map( subEl => toJSON(subEl) );
    return `[${els.join(", ")}]`;

  } else if (el instanceof Object) {
    const keys = Object.keys(el);
    const keyVals = keys.map( key => {
      const keyJSON = toJSON(key);
      const valJSON = toJSON(el[key]);
      return `${keyJSON}:${valJSON}`;
    });
    return `{${keyVals.join(", ")}}`;

  } else if (el === null) {
    return "null";
    
  } else {
    throw "Cannot JSONify element";
  }
}

console.log(toJSON(4));
console.log(toJSON("sdfsdf"));
console.log(toJSON(true));
console.log(toJSON(false));
console.log(toJSON([3,5,"sd",true, false,2]));
console.log(toJSON({4:null, 5:[], 3:[23,3,3], "sdfsdf":false, "sdf2": true}));

function Cat() {}
const cat = new Cat;
console.log(toJSON(cat));
