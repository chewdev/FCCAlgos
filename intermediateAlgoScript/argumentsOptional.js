function addTogether() {
  // This function can takes either 1 or 2 arguments, if number arguments are passed, the sum is returned
  // If any argument is not a number, undefined is returned
  // If 1 number argument is passed, then a function is return that takes one argument that is to be summed with the argument passed to this function

  // Check that all arguments are numbers, else return undefined
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return undefined;
    }
  }

  // Grab out the first argument as x
  const x = arguments[0];

  // If there are 2 arguments which have been determined to be numbers, return their sum
  if (arguments.length >= 2) {
    return x + arguments[1];
  }

  // Otherwise return a function which holds x as a closure and takes another number as an argument and returns the sum of that number + x
  return function(y) {
    // Check that the argument passed to this function is also a number, if not return undefined
    if (typeof y !== "number") {
      return undefined;
    }
    // return sum of closure value of x and argument y
    return x + y;
  };
}

addTogether(2, 3);
