type StackType = {
  index: number;
  height: number;
};
function largestRectangle(heights: number[]) {
  let maxArea = 0;
  const stack: StackType[] = [];
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    let startIndex = i;
    while (stack.length && stack[stack.length - 1].height > height) {
      const stackRecord = stack.pop();
      if (!stackRecord) return;
      maxArea = Math.max(maxArea, stackRecord.height * (i - stackRecord.index));
      startIndex = stackRecord.index;
    }
    const itemToPush = {
      index: startIndex,
      height: height,
    };
    stack.push(itemToPush);
  }
  for (let i = 0; i < stack.length; i++) {
    maxArea = Math.max(
      maxArea,
      stack[i].height * (heights.length - stack[i].index)
    );
  }
  return maxArea;
}
