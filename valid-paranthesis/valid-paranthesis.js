function isValid(s) {
    var paranthesisMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    var items = s.split("");
    var stack = [];
    var isValid = true;
    if (s.length % 2 !== 0)
        return false;
    for (var i = 0; i < items.length; i++) {
        console.log("Stack: ", stack);
        if (paranthesisMap[items[i]]) {
            console.log("Pushing: ", items[i]);
            stack.push(items[i]);
        }
        else {
            console.log("paranthesisMap: ", paranthesisMap[stack[stack.length - 1]], " item: ", items[i]);
            if (paranthesisMap[stack[stack.length - 1]] !== items[i]) {
                return false;
            }
            else {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("()"));
