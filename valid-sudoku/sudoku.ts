function isValidSudoku(board: string[][]): boolean {
  let isValid = true;
  const columnsMap = new Map<number, string[]>();

  const getSquareIndex = (row: number, column: number): number => {
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

  const squares = Array.from(Array(9), (): string[] => []);

  for (let row = 0; row < board.length; row++) {
    let rowItems: string[] = [];
    for (let bucket = 0; bucket < board[row].length; bucket++) {
      const item = board[row][bucket];
      if (item === ".") {
        continue;
      }
      if (rowItems.includes(item)) {
        isValid = false;
      }
      rowItems.push(item);
      let columnItems = columnsMap.get(bucket);
      if (columnItems) {
        columnItems.push(item);
        columnsMap.set(bucket, columnItems);
      } else {
        columnsMap.set(bucket, [item]);
      }

      const squareIndex = getSquareIndex(row, bucket) - 1;
      squares[squareIndex].push(item);
    }
  }
  columnsMap.forEach((column) => {
    const columnItems: string[] = [];
    column.forEach((item) => {
      if (columnItems.includes(item)) {
        isValid = false;
      }
      columnItems.push(item);
    });
  });
  squares.forEach((square) => {
    const squareItems: string[] = [];
    square.forEach((item) => {
      if (squareItems.includes(item)) {
        isValid = false;
      }
      squareItems.push(item);
    });
  });
  return isValid;
}

console.log(
  isValidSudoku([
    [".", ".", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["1", ".", ".", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", "2", ".", "6", ".", "."],
    [".", "9", ".", ".", ".", ".", ".", "7", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", "8", ".", ".", ".", ".", "."],
  ])
);
