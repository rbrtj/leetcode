function trap(height) {
    var solution = [];
    var left = 0;
    var right = height.length - 1;
    var maxLeftHeight = 0;
    var maxRightHeight = 0;
    var tappedWater = 0;
    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] > maxLeftHeight) {
                maxLeftHeight = height[left];
            }
            else {
                tappedWater += maxLeftHeight - height[left];
            }
            left++;
        }
        else {
            if (height[right] > maxRightHeight) {
                maxRightHeight = height[right];
            }
            else {
                tappedWater += maxRightHeight - height[right];
            }
            right--;
        }
    }
    return tappedWater;
}
console.log(trap([4, 2, 0, 3, 2, 5]));
