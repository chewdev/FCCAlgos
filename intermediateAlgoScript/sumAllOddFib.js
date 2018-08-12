function sumFibs(num) {
  // Initialize first 2 given fib numbers in array
  const fib = [1, 1];

  // Create function to check and return next fib value
  const nextFib = () => fib[fib.length - 1] + fib[fib.length - 2];

  // As long as the next fib is less than num argument, push that fib number into fib array
  while (nextFib() <= num) {
    fib.push(nextFib());
  }

  // We only want to sum odd fib numbers, so filter out even fibs and then reduce to a sum
  const sum = fib
    .filter(fibNum => fibNum % 2 === 1)
    .reduce((a, fibNum) => a + fibNum, 0);
  return sum;
}

console.log(sumFibs(4));
