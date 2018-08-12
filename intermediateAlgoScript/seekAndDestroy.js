function destroyer(arr) {
  // Make arr copy in order to not change original arr
  const arrCopy = [...arr];

  // For each element of the arguments array (except index 0 which is arr), check if element exists in the array and splice it out. Continue while loop until all instances of the element have been removed then continue to next argument element.
  for (let i = 1; i < arguments.length; i++) {
    while (arrCopy.indexOf(arguments[i]) >= 0) {
      arrCopy.splice(arrCopy.indexOf(arguments[i]), 1);
    }
  }
  return arrCopy;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
