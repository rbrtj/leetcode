// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
function productExpectSelf(nums: number[]): number[] {
  const fromLeft = [1];
  const fromRight = [1];
  let startingPoint = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    fromLeft.push(startingPoint * nums[i]);
    startingPoint = startingPoint * nums[i];
  }
  let startingPointFromRight = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    fromRight.unshift(startingPointFromRight * nums[i]);
    startingPointFromRight = startingPointFromRight * nums[i];
  }
  return fromLeft.map((n, index) => n * fromRight[index]);
}

console.log(productExpectSelf([1, 2, 3, 4]));
