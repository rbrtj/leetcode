function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  const solution = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[right]) < Math.abs(nums[left])) {
      square = nums[left];
      left++;
    } else {
      square = nums[right];
      right--;
    }
    solution[i] = square * square;
  }
  return solution;
}
