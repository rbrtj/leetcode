function trap(height: number[]) {
  const solution: number[] = [];
  let left = 0;
  let right = height.length - 1;
  let maxLeftHeight = 0;
  let maxRightHeight = 0;
  let tappedWater = 0;
  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > maxLeftHeight) {
        maxLeftHeight = height[left];
      } else {
        tappedWater += maxLeftHeight - height[left];
      }
      left++;
    } else {
      if (height[right] > maxRightHeight) {
        maxRightHeight = height[right];
      } else {
        tappedWater += maxRightHeight - height[right];
      }
      right--;
    }
  }
  return tappedWater;
}

console.log(trap([4, 2, 0, 3, 2, 5]));
