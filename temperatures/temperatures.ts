function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const solution: number[] = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      console.log(
        "temperatures[stack[stack.length-1]]",
        stack[stack.length - 1]
      );
      const j = stack.pop();
      if (j) {
        solution[j] = i - j;
      }
    }

    stack.push(i);
  }

  return solution;
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
