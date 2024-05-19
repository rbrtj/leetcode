function searchMatrix(matrix: number[][], target: number): boolean {
  let colStart = 0;
  let colEnd = matrix.length - 1;
  let rowIndex = -1;
  while (colEnd >= colStart) {
    let colPivot = Math.floor((colStart + colEnd) / 2);
    if (
      matrix[colPivot][0] <= target &&
      matrix[colPivot][matrix[0].length - 1] >= target
    ) {
      rowIndex = colPivot;
      break;
    }
    if (matrix[colPivot][0] > target) {
      colEnd = colPivot - 1;
    }
    if (matrix[colPivot][matrix[0].length - 1] < target) {
      colStart = colPivot + 1;
    }
  }
  if (rowIndex === -1) return false;
  let rowStart = 0;
  let rowEnd = matrix[0].length - 1;
  while (rowEnd >= rowStart) {
    let pivot = Math.floor((rowStart + rowEnd) / 2);
    if (matrix[rowIndex][pivot] === target) {
      return true;
    }
    if (matrix[rowIndex][pivot] > target) {
      rowEnd = pivot - 1;
    }
    if (matrix[rowIndex][pivot] < target) {
      rowStart = pivot + 1;
    }
  }

  return false;
}

console.log(searchMatrix([[1]], 2));
