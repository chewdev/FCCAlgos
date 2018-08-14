function gcd(a, b) {
  // This calculates the greatest common divisor of 2 numbers
  // This function is needed by lcm (least common multiple) function to calculate lcm
  var remainder = 0;
  do {
    remainder = a % b;
    a = b;
    b = remainder;
  } while (b !== 0);

  return a;
}

function lcm(a, b) {
  // Least common multiple is simply calculated as (a * b)/gcd(a, b)
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  // Input should be an array of 2 numbers, that may not be sorted
  // Save the min number and max numbers from the array
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // The smallest that the least common multiple of the range could be is the lcm of the 2 largest numbers in the range
  // Save this as the initial current LCM (currLCM)
  let currLCM = lcm(max, max - 1);

  // The least common multiple of 3 numbers can be found by computing the lcm of the first 2 numbers and then computing the lcm of that lcm with the 3rd number
  // E.g. lcm(a, b, c) = lcm(lcm(a, b), c)
  // We can use this to compute the lcm of a range by stepping through the range and computing the lcm of the previous lcm with the current value
  // At the end we will have the LCM of the entire range of numbers

  // We already computed lcm of max and max - 1, so we start the loop at max - 2 and step down until we reach the min of the range
  for (let i = max - 2; i >= min; i--) {
    currLCM = lcm(currLCM, i);
  }

  return currLCM;
}

smallestCommons([1, 5]);
