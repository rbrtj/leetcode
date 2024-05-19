function threeSum(nums: number[]) {
  const solution: number[][] = [];
  const numsSorted = nums.sort((a, b) => a - b);
  let solutionSet = new Set();
  let solutionString = "";
  for (let i = 0; i < nums.length; i++) {
    let leftPointerIndex = i + 1;
    let rightPointerIndex = nums.length - 1;
    while (
      leftPointerIndex < nums.length &&
      rightPointerIndex >= 0 &&
      leftPointerIndex < rightPointerIndex
    ) {
      const sum =
        numsSorted[i] +
        numsSorted[leftPointerIndex] +
        numsSorted[rightPointerIndex];
      if (sum === 0) {
        const stringPattern = `${numsSorted[i]}${numsSorted[leftPointerIndex]}${numsSorted[rightPointerIndex]}}`;
        if (!solutionSet.has(stringPattern)) {
          solution.push([
            numsSorted[i],
            numsSorted[leftPointerIndex],
            numsSorted[rightPointerIndex],
          ]);
          solutionSet.add(stringPattern);
        }

        leftPointerIndex++;
        rightPointerIndex--;
      }
      if (sum < 0) {
        leftPointerIndex++;
      }
      if (sum > 0) {
        rightPointerIndex--;
      }
    }
  }
  return solution;
}

threeSum([
  -9, 1, -6, -4, -4, 0, -1, 2, -6, 5, 6, -9, -10, -8, 0, 9, -6, 4, -8, 6, 4, 1,
  -10, -1, -9, -9, 5, -4,
]);
