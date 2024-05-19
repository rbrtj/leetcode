function evalRPN(tokens) {
    var operatorsMap = {
        "+": add,
        "*": multiply,
        "-": subtract,
        "/": divide,
    };
    var stack = [];
    var solution = 0;
    for (var i = 0; i < tokens.length; i++) {
        if (!operatorsMap[tokens[i]]) {
            console.log("Pushing: ", parseInt(tokens[i]));
            stack.push(parseInt(tokens[i]));
            console.log("Stack after pushing: ", stack);
        }
        else {
            console.log("Stack before picking up: ", stack);
            var a = stack.pop();
            var b = stack.pop();
            console.log("Operation: ", operatorsMap[tokens[i]]);
            stack.push(operatorsMap[tokens[i]](b, a));
            console.log("Operation value: ", operatorsMap[tokens[i]](b, a));
        }
    }
    console.log(stack);
    function add(a, b) {
        return a + b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function divide(a, b) {
        return Math.trunc(a / b);
    }
}
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
