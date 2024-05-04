function threeSum(nums) {
    var solution = [];
    var numsSorted = nums.sort(function (a, b) { return a - b; });
    console.log("nums sorted: ", numsSorted);
    var solutionSet = new Set();
    var solutionString = "";
    for (var i = 0; i < nums.length; i++) {
        var leftPointerIndex = i + 1;
        var rightPointerIndex = nums.length - 1;
        while (leftPointerIndex < nums.length &&
            rightPointerIndex >= 0 &&
            leftPointerIndex < rightPointerIndex) {
            var sum = numsSorted[i] +
                numsSorted[leftPointerIndex] +
                numsSorted[rightPointerIndex];
            if (sum === 0) {
                var stringPattern = "".concat(numsSorted[i]).concat(numsSorted[leftPointerIndex]).concat(numsSorted[rightPointerIndex], "}");
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
    console.log("solution: ", solution);
}
threeSum([
    -9, 1, -6, -4, -4, 0, -1, 2, -6, 5, 6, -9, -10, -8, 0, 9, -6, 4, -8, 6, 4, 1,
    -10, -1, -9, -9, 5, -4,
]);
