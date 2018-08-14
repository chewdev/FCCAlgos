function dropElements(arr, func) {
  // This function takes a callback (func) and an array
  // This function should return all elements of the array AFTER AND INCLUDING the first element that passes the callback func truth test (returns true)

  // This will alter original array passed in as an argument
  // Make a copy if we need to preserve passed in arr and change arr to arrCopy below
  // const arrCopy = [...arr];

  // Use shift array method until first element passes truth test
  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
