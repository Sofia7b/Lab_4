'use strict';

const max = (matrix) => {
  // Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
let max = matrix[0][0];
for (const row of matrix) {
  for (const element of row) {
    max = Math.max(max, element);
  }
  // вместо вложенного цикла
  // max = Math.max(max, ...row);
}
return max;
};

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
module.exports = { max };
