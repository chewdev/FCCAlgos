function findElement(arr, func) {
  // Loop through array from beginning and return first element that passes truth test callback
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  // If none return true, return undefined
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
