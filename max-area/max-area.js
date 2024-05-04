function maxAreaTooSlow(height) {
    var max = 0;
    for (var i = 0; i < height.length; i++) {
        var x = i + 1;
        while (x < height.length) {
            max = Math.max(Math.min(height[i], height[x]) * (x - i), max);
            x++;
        }
    }
    return max;
}
function maxArea(height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var area = Math.max(Math.min(height[left], height[right]) * (right - left), max);
        max = Math.max(area, max);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return max;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
