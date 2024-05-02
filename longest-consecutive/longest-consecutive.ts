function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let max = 0;
  for (const num of nums) {
    if (numsSet.has(num + 1)) {
      continue;
    }
    let counter = 1;
    let current = num;
    while (numsSet.has(current - 1)) {
      counter++;
      current--;
    }
    max = Math.max(counter, max);
  }
  return max;
}
