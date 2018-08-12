function diffArray(arr1, arr2) {
  // filter each array, only returning elements that don't exist in the other array (indexOf equal to -1), then concatenate them together
  return arr1
    .filter(val => arr2.indexOf(val) === -1)
    .concat(arr2.filter(val => arr1.indexOf(val) === -1));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
