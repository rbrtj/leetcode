function isValid(s: string) {
  const paranthesisMap: Record<any, any> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const items = s.split("");
  const stack: string[] = [];
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < items.length; i++) {
    if (paranthesisMap[items[i]]) {
      stack.push(items[i]);
    } else {
      if (paranthesisMap[stack[stack.length - 1]] !== items[i]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("()"));
