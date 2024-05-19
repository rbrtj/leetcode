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
      stack.push(parseInt(tokens[i]));
    } else {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(operatorsMap[tokens[i]](b, a));
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
