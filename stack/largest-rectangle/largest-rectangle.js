function largestRectangle(heights) {
    var maxArea = 0;
    var stack = [];
    for (var i = 0; i < heights.length; i++) {
        var height = heights[i];
        var startIndex = i;
        while (stack.length && stack[stack.length - 1].height > height) {
            var stackRecord = stack.pop();
            if (!stackRecord)
                return;
            maxArea = Math.max(maxArea, stackRecord.height * (i - stackRecord.index));
            startIndex = stackRecord.index;
        }
        var itemToPush = {
            index: startIndex,
            height: height,
        };
        stack.push(itemToPush);
    }
    for (var i = 0; i < stack.length; i++) {
        maxArea = Math.max(maxArea, stack[i].height * (heights.length - stack[i].index));
    }
    return maxArea;
}
