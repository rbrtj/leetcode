function generateParanthesis(n: number): string[] {
  const result: string[] = [];
  function generate(
    leftOpen: number,
    leftClosed: number,
    paranthesisString: string
  ) {
    if (leftOpen === leftClosed && leftOpen === 0) {
      result.push(paranthesisString);
      return;
    }

    if (leftOpen < leftClosed) {
      generate(leftOpen, leftClosed - 1, paranthesisString + ")");
    }

    if (leftOpen > 0) {
      generate(leftOpen - 1, leftClosed, paranthesisString + "(");
    }
  }
  generate(n, n, "");
  return result;
}

console.log(generateParanthesis(1));
