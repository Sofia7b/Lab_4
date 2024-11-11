'use strict';

const sum = (...args) => {
    // Use Array.prototype.reduce method
    // to calculate sum of all given arguments
    // For example sum(1, 2, 3) should return 6
let sum = args.reduce((acc, element) => acc + element, 0);
return sum;
}
// console.log(sum(1, 2, 3));
// console.log(sum(-1, -2, -3, 6));
module.exports = { sum };
