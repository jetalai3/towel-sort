
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  matrix = matrix.map(current => matrix.indexOf(current) % 2 === 0 ? current : current.reverse())
  let result = recursiveSort(matrix);
  return result;
}

function recursiveSort(matrix) {
  if (matrix.filter(current => Array.isArray(current)).length > 0) {
    matrix = matrix.flat();
    return recursiveSort(matrix);
  } else if (matrix.filter(current => Array.isArray(current)).length === 0) return matrix;
}
