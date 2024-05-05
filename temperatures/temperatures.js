function dailyTemperatures(temperatures) {
    var stack = [];
    var solution = Array(temperatures.length).fill(0);
    for (var i = 0; i < temperatures.length; i++) {
        var temp = temperatures[i];
        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            console.log("temperatures[stack[stack.length-1]]", stack[stack.length - 1]);
            var j = stack.pop();
            if (j) {
                solution[j] = i - j;
            }
        }
        stack.push(i);
    }
    return solution;
}
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
