function longestConsecutive(nums) {
    var numsSet = new Set(nums);
    var max = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (numsSet.has(num + 1)) {
            continue;
        }
        var counter = 1;
        var current = num;
        while (numsSet.has(current - 1)) {
            counter++;
            current--;
        }
        max = Math.max(counter, max);
    }
    return max;
}
