function searchMatrix(matrix, target) {
    var colStart = 0;
    var colEnd = matrix.length - 1;
    var rowIndex = -1;
    while (colEnd >= colStart) {
        var colPivot = Math.floor((colStart + colEnd) / 2);
        if (matrix[colPivot][0] <= target &&
            matrix[colPivot][matrix[0].length - 1] >= target) {
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
    console.log("Row index: ", rowIndex);
    if (rowIndex === -1)
        return false;
    var rowStart = 0;
    var rowEnd = matrix[0].length - 1;
    while (rowEnd >= rowStart) {
        var pivot = Math.floor((rowStart + rowEnd) / 2);
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
