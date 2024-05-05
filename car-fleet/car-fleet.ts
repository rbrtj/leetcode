function carFleet(target: number, position: number[], speed: number[]): number {
  const cars: number[][] = [];
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]);

  const getTimeTillCarReachesTarget = (
    target: number,
    carPosition: number,
    carSpeed: number
  ) => {
    return (target - carPosition) / carSpeed;
  };

  const stack = [cars[0]];
  for (let i = 1; i < cars.length; i++) {
    stack.push(cars[i]);
    const timeTillCarReachesTarget = getTimeTillCarReachesTarget(
      target,
      cars[i][0],
      cars[i][1]
    );
    const carFromStack = stack[stack.length - 2];
    if (
      getTimeTillCarReachesTarget(target, carFromStack[0], carFromStack[1]) >=
      timeTillCarReachesTarget
    ) {
      stack.pop();
    }
  }

  return stack.length;
}

carFleet(100, [0, 2, 4], [4, 2, 1]);
