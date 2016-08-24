// http://alf.nu/ReturnTrue

// ID
function id(x) {
  return x;
}
id(true);

// Reflexive
function reflexive(x) {
  return x != x;
}

reflexive(NaN);

// Transitive
function transitive(x,y,z) {
  return x && x == y && y == z && x != z;
}
transitive("1", 1, true);

// Counter
function counter(f) {
    var a = f(), b = f();
    return a() == 1 && a() == 2 && a() == 3
        && b() == 1 && b() == 2;
}

counter( () => {
  let curr = 0;

  return function() {
    curr += 1;
    return curr;
  };
});

// Peano
function peano(x) {
  return (x++ !== x) && (x++ === x);
}

peano(
)

// Array
function array(x,y) {
  return Array.isArray(x) && !(x instanceof Array) &&
    !Array.isArray(y) &&  (y instanceof Array);
}

// function array(x,y) {
//   console.log(Array.isArray(x));
//   console.log(!(x instanceof Array));
//   console.log(!Array.isArray(y));
//   console.log((y instanceof Array));
// }

array(Array.prototype, { __proto__: Array.prototype });

// Instance
function instance(x,y) {
  return x instanceof y && y instanceof x && x !== y;
}

instance(
);

function proto1(x) {
  return x && !("__proto__" in x);
}

proto1(
  function() {
    const x = {};
    x.prototype = undefined;
    return x;
  }()
);

function undef(x) {
  return !{ undefined: { undefined: 1 } }[typeof x][x];
}

function undef(x) {
  console.log(typeof x); // undefined
  console.log(x); // not undefined
  console.log({ undefined: { undefined: 1 } }[typeof x][x]); // false
}

// typeof x === undefined
// x !== undefined
undef( function() {
  let x;
  return x;
}());
