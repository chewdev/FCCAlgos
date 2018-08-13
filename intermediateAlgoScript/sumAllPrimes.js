function sumPrimes(num) {
  // Initialize a range and prime number array
  let range = [];
  let primes = [];

  // Push all numbers starting from the first prime (2) up until the num argument into the range array
  for (let i = 2; i <= num; i++) {
    range.push(i);
  }

  // Loop through the range array
  // The first number in the range array has not been divisible by any smaller number other than 1 or else it would have been filtered out already
  // Grab this first number, push it into the primes array, then filter out all values in the range that are divisible by the number
  // Continue until all primes have been pushed into the primes array and the range array is empty

  while (range.length) {
    let curr = range.shift();
    primes.push(curr);
    range = range.filter(val => val % curr !== 0);
  }

  // Use reduce to sum all values in the primes array and return this value
  return primes.reduce((a, prime) => a + prime, 0);
}

console.log(sumPrimes(10));
