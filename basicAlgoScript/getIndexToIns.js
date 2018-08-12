function getIndexToIns(arr, num) {
  // sort array from smallest to biggest
  arr.sort((a, b) => a > b);

  // loop through array and find first index where the value is less than or equal to the new number
  // return that index
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  // if no values in the array are greater than the num, return the length of the array which is the index after the final element
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
