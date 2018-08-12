function sumAll(arr) {
  let sum = 0;
  // loop through all integers from the min number of the array to the max number of the array and add each to the total sum
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
