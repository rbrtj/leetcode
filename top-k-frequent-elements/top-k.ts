// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

function topKFrequent(nums: number[], k: number): number[] {
  const numsMap = new Map<number, number>();
  nums.forEach((num) => {
    let maybeNum = numsMap.get(num);
    if (maybeNum === undefined) {
      numsMap.set(num, 1);
      return;
    }
    maybeNum++;
    numsMap.set(num, maybeNum);
  });
  const sortedNums = Array.from(numsMap.entries()).sort((a, b) => b[1] - a[1]);
  const solution: number[] = [];
  for (let i = 0; i < k; i++) {
    solution.push(sortedNums[i][0]);
  }
  return solution;
}
