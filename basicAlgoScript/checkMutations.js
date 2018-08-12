function createLowArr(str) {
  // turn string into lowercase array
  return str.toLowerCase().split("");
}

function mutation(arr) {
  const arr1 = createLowArr(arr[0]);
  const arr2 = createLowArr(arr[1]);
  // check that every element of second array is in the first array
  return arr2.every(val => arr1.indexOf(val) !== -1);
}

console.log(mutation(["hello", "hey"]));
