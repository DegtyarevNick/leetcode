/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const result = { count: 0 };
  for (let rows = 0; rows < grid.length; rows++) {
    for (let cols = 0; cols < grid[0].length; cols++) {
      dfs(grid, rows, cols, result);
    }
  }
  return result.count;
};

function dfs(grid, rows, cols, result, area = { count: 0 }) {
  if (!grid[rows] || !grid[rows][cols]) return;
  result.count = Math.max(result.count, (area.count += grid[rows][cols]));
  grid[rows][cols] = 0;
  dfs(grid, rows, cols - 1, result, area);
  dfs(grid, rows, cols + 1, result, area);
  dfs(grid, rows - 1, cols, result, area);
  dfs(grid, rows + 1, cols, result, area);
}

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));
