function isValidSudoku(board) {
    var isValid = true;
    var columnsMap = new Map();
    var getSquareIndex = function (row, column) {
        if (row < 3) {
            if (column < 3) {
                return 1;
            }
            if (column < 6) {
                return 2;
            }
            return 3;
        }
        if (row >= 3 && row < 6) {
            if (column < 3) {
                return 4;
            }
            if (column < 6) {
                return 5;
            }
            return 6;
        }
        if (column < 3) {
            return 7;
        }
        if (column < 6) {
            return 8;
        }
        return 9;
    };
    var squares = Array.from(Array(9), function () { return []; });
    for (var row = 0; row < board.length; row++) {
        var rowItems = [];
        for (var bucket = 0; bucket < board[row].length; bucket++) {
            var item = board[row][bucket];
            if (item === ".") {
                continue;
            }
            if (rowItems.includes(item)) {
                isValid = false;
            }
            rowItems.push(item);
            var columnItems = columnsMap.get(bucket);
            if (columnItems) {
                columnItems.push(item);
                columnsMap.set(bucket, columnItems);
            }
            else {
                columnsMap.set(bucket, [item]);
            }
            var squareIndex = getSquareIndex(row, bucket) - 1;
            squares[squareIndex].push(item);
        }
    }
    columnsMap.forEach(function (column) {
        var columnItems = [];
        column.forEach(function (item) {
            if (columnItems.includes(item)) {
                isValid = false;
            }
            columnItems.push(item);
        });
    });
    squares.forEach(function (square) {
        var squareItems = [];
        square.forEach(function (item) {
            if (squareItems.includes(item)) {
                isValid = false;
            }
            squareItems.push(item);
        });
    });
    return isValid;
}
console.log(isValidSudoku([
    [".", ".", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["1", ".", ".", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", "2", ".", "6", ".", "."],
    [".", "9", ".", ".", ".", ".", ".", "7", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", "8", ".", ".", ".", ".", "."],
]));
