// Load the full build.
var _ = require('lodash');
// Load the core build.
// var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load a method category.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Load a single method for smaller builds with browserify/rollup/webpack.
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');
var uniq = require('lodash/uniq');

console.log(_.uniq([3,4,5,4,3]));
console.log(_.isArray([]));
console.log(_.isObject([]) && !_.isArray([]));

console.log(_.map([1,2,3], n => n*3 ));

let arr = [2,4,6,7,3,5,6];
let a2 = _.drop(arr, 2);
let a3 = _.take(arr, 2);
console.log(a2);
console.log(a3);
console.log(arr);

let unioned = _.union(a2, a3, [1,2,3,4,5], [1,2,35,2,2]);
console.log(unioned);
console.log(unioned.sort( (a, b) => a - b ));

console.log(_.union([1,2,4,4,7,4,3,1,2,2,3,3,2]));


console.log(_.chunk([2,3,4,6,6,8,0,3,1,4], 3));

console.log(_.difference([2,3,4,6], [3,4,5,7]));
