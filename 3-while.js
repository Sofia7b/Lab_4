'use strict';

const sum = (...args) => {
  // Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  let index = 0;
  while(index < args.length) {
    acc += args[index];
    ++index;
  }
  return acc;
};
// console.log(sum(1, 2, 3));
// console.log(sum(-1, -2, -3, 6));
module.exports = { sum };
