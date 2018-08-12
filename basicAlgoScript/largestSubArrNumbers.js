function largestOfFour(arr) {
  // Assumes each element of arr is a sub array with at least 1 element
  const longestArr = [];
  arr.forEach(subArr => {
    // Solution not using a simple method

    // let max = subArr[0];
    // for (let i = 1; i < subArr.length; i++) {
    //   if (subArr[i] > max) {
    //     max = subArr[i];
    //   }
    // }
    // longestArr.push(max);

    // Solution using simple max method
    longestArr.push(Math.max(...subArr));
  });
  return longestArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
