function uniteUnique(arr) {
  // Initialize a new array where we will push all unique values
  const newArr = [];

  // Any number of arrays can be passed in, so we must map over each argument of the arguments object. Since arguments is an object and not an array, we can't use .forEach and must use a for loop.
  for (let i = 0; i < arguments.length; i++) {
    // Map over the current subarray from the arguments object and check if newArr already contains the element in the subarray. If not, push it into the newArr.
    arguments[i].forEach(el => {
      if (newArr.indexOf(el) === -1) {
        newArr.push(el);
      }
    });
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
