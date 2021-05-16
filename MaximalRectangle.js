/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const rows = matrix.length;
  if (rows === 0) return 0;
  const cols = matrix[0].length;

  const rectangleCount = new Array(rows).fill(0);

  let max = 0;
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      if (matrix[i][j] === "1") rectangleCount[i]++;
      else rectangleCount[i] = 0;
    }
    for (let i = 0; i < rows; i++) {
      let k1 = i - 1;
      while (k1 >= 0 && rectangleCount[i] <= rectangleCount[k1]) k1--;
      let k2 = i + 1;
      while (k2 < rows && rectangleCount[i] <= rectangleCount[k2]) k2++;
      max = Math.max(max, rectangleCount[i] * (k2 - k1 - 1));
    }
  }
  return max;
};

console.log(
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]),
);
console.log(maximalRectangle([]));
console.log(maximalRectangle([["0"]]));
console.log(maximalRectangle([["1"]]));
console.log(maximalRectangle([["0", "0"]]));
