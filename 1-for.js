'use strict';

const sum = (...args) => {
  // Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6

  let acc = 0;
  for (let index = 0; index < args.length; index++) {
    acc +=args[index];
  }
  return acc;
};

// console.log(sum(1, 2, 3));
// console.log(sum(-1, -2, -3, 6));
module.exports = { sum };
