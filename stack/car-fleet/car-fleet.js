function carFleet(target, position, speed) {
    var cars = [];
    for (var i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }
    cars.sort(function (a, b) { return b[0] - a[0]; });
    var getTimeTillCarReachesTarget = function (target, carPosition, carSpeed) {
        return (target - carPosition) / carSpeed;
    };
    var stack = [cars[0]];
    for (var i = 1; i < cars.length; i++) {
        stack.push(cars[i]);
        var timeTillCarReachesTarget = getTimeTillCarReachesTarget(target, cars[i][0], cars[i][1]);
        var carFromStack = stack[stack.length - 2];
        if (getTimeTillCarReachesTarget(target, carFromStack[0], carFromStack[1]) >=
            timeTillCarReachesTarget) {
            stack.pop();
        }
    }
    console.log(stack);
    return 0;
}
carFleet(100, [0, 2, 4], [4, 2, 1]);
