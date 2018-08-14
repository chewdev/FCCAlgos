function steamrollArray(arr) {
  // This function should flatten out nested arrays into a 1 dimensional array
  // E.g. steamrollArray([1, 2, [3, 4,[5]]]) = [1, 2, 3, 4, 5]

  // Initialize a new array
  const newArr = [];

  // Check each element of passed in array, if element is an array, recursively call steamrollArray on it
  // As long as elements are arrays, it will recursively call function
  // When function reaches non array elements nested within arrays, they are pushed into newArr and returned as an array
  // In order to flatten out returned array when function is called recursively, we use the spread operator
  arr.forEach(val => {
    if (Array.isArray(val)) {
      // Element is an array, so we recursively call steamrollArray to flatten it
      const steamrolled = steamrollArray(val);
      // steamrollArray returns an array, use the spread operator to add each element separately and not as an array
      newArr.push(...steamrolled);
    } else {
      // Element isn't an array and we can just push it into the newArr
      newArr.push(val);
    }
  });
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
