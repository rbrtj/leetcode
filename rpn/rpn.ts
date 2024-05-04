function evalRPN(tokens: string[]) {
  const operatorsMap: Record<any, any> = {
    "+": add,
    "*": multiply,
    "-": subtract,
    "/": divide,
  };

  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!operatorsMap[tokens[i]]) {
      console.log("Pushing: ", parseInt(tokens[i]));
      stack.push(parseInt(tokens[i]));
      console.log("Stack after pushing: ", stack);
    } else {
      console.log("Stack before picking up: ", stack);
      const a = stack.pop();
      const b = stack.pop();
      console.log("Operation: ", operatorsMap[tokens[i]]);
      stack.push(operatorsMap[tokens[i]](b, a));
      console.log("Operation value: ", operatorsMap[tokens[i]](b, a));
    }
  }

  console.log(stack);

  function add(a: number, b: number) {
    return a + b;
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  function subtract(a: number, b: number) {
    return a - b;
  }

  function divide(a: number, b: number) {
    return Math.trunc(a / b);
  }
}

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);
