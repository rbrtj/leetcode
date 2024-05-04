function maxAreaTooSlow(height: number[]): number {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    let x = i + 1;
    while (x < height.length) {
      max = Math.max(Math.min(height[i], height[x]) * (x - i), max);
      x++;
    }
  }
  return max;
}

function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      max
    );
    max = Math.max(area, max);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
