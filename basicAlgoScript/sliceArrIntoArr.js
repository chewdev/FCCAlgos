// function frankenSplice(arr1, arr2, n) {
//   return arr2
//     .slice(0, n)
//     .concat(arr1.slice(0))
//     .concat(arr2.slice(n));
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function frankenSplice(arr1, arr2, n) {
  // make a copy of arr2 in order to not change the argument
  const arr3 = arr2.slice(0);
  // splice in arr1 at index n, removing 0 elements, using the spread operator
  arr3.splice(n, 0, ...arr1);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
