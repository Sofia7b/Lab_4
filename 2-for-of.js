'use strict';

const sum = (...args) => {
  // Use for..of loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
  let acc = 0;
  for (const element of args) {
    acc += element;
  }
  return acc;
};
// console.log(sum(1, 2, 3));
// console.log(sum(-1, -2, -3, 6));
module.exports = { sum };
