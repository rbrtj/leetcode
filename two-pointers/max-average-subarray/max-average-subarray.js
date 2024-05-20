function findMaxAverage(nums, k) {
  let left = 0;
  let right = k - 1;
  let sum = 0;
  let maxAverage;
  while (left < nums.length) {
    sum += nums[left];

    if (left < k) {
      maxAverage = sum;
    } else {
      sum -= nums[left - k];
      maxAverage = Math.max(maxAverage, sum);
    }
    left++;
  }
  return maxAverage / k;
}
